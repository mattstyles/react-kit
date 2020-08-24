
import fs from 'fs'
import feather from 'feather-icons'
import svgr from '@svgr/core'

const toPascalCase = str => {
  return str
    .replace(/^./, c => c.toUpperCase())
    .replace(/-./g, c => c[1].toUpperCase())
}

const template = ({ template }, opts, {
  imports,
  interfaces,
  componentName,
  props,
  jsx,
  exports
}) => {
  const plugins = ['jsx']
  const tmpl = template.smart({ plugins })
  return tmpl.ast`
${imports}
import { Icon } from './icon.js'
const Tag = ({ strokeWidth, titleId, title }) => ${jsx}
export const ${componentName} = props => <Icon {...props}><Tag strokeWidth={props.strokeWidth} title={props.title} titleId={props.titleId} /></Icon>
${componentName}.defaultProps = {
  strokeWidth: 2,
  title: '${componentName.name}',
  titleId: '${componentName.name + '-icon'}'
}
`
}

const buildIcon = icon => {
  const componentName = toPascalCase(icon.name)
  const config = {
    icon: true,
    plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
    template,
    expandProps: false,
    dimensions: false,
    svgProps: {
      width: '100%',
      height: '100%',
      strokeWidth: '{strokeWidth}',
      focusable: false,

      // Customise these per file
      'aria-labelledby': `${componentName}-icon`
    },
    jsx: {
      babelConfig: {
        plugins: [
          [
            '@svgr/babel-plugin-remove-jsx-attribute', {
              elements: ['svg'],
              attributes: ['className']
            }
          ],
          [
            '@svgr/babel-plugin-svg-dynamic-title'
          ]
        ]
      }
    }
  }

  svgr(
    icon.toSvg(),
    config,
    { componentName: componentName }
  ).then(code => {
    console.log('Writing to', `${componentName}.js`)
    fs.writeFileSync(`./${componentName}.js`, code, { encoding: 'utf8' })
  })
}

const buildIconFile = () => {
  const file = fs.readFileSync('./src/icon.js')
  fs.writeFileSync('./icon.js', file)
}

for (const [, icon] of Object.entries(feather.icons)) {
  buildIcon(icon)
}

buildIconFile()
