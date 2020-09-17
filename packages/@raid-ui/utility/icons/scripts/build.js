
import fs from 'fs'
import feather from 'feather-icons'
import svgr from '@svgr/core'
import { transform } from '@babel/core'
import { minify } from 'terser'

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
const O = ({ strokeWidth, titleId, title }) => ${jsx}
export const ${componentName} = props => <Icon {...props}><O strokeWidth={props.strokeWidth} title={props.title} titleId={props.titleId} /></Icon>
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
  ).then(async code => {
    const filename = `${componentName}.js`

    console.log('[2/3] Transforming', filename)
    transform(code, {
      presets: [
        '@babel/preset-react'
      ]
    }, async (err, res) => {
      if (err) {
        console.error(err)
      }

      try {
        console.log('[3/3] Minifying', filename)
        const output = await minify(res.code)

        console.log('Writing to', filename)
        fs.writeFileSync(`./${filename}`, output.code, { encoding: 'utf8' })
      } catch (err) {
        console.log('Error minifying', filename)
        console.error(err)
      }
    })
  })
}

const buildIconFile = () => {
  const file = fs.readFileSync('./src/icon.js')
  fs.writeFileSync('./icon.js', file)
}

for (const [, icon] of Object.entries(feather.icons)) {
  console.log('[1/3] Beginning first pass for', icon.name)
  buildIcon(icon)
}

buildIconFile()
