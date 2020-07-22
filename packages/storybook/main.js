
const { compose, filter, keys } = require('rambda')

const useMDX = process.env.USE_MDX || false

const addons = {
  '@storybook/addon-actions': true,
  '@storybook/addon-links': true,
  '@storybook/addon-knobs': true,
  '@storybook/addon-backgrounds': true,
  // Disabling as it nukes the console with an error, https://github.com/storybookjs/storybook/issues/10204
  // '@storybook/addon-viewport': true,
  '@storybook/addon-docs': useMDX,

  // Not ready to use yet
  '@storybook/addon-notes': false
}

const pickAddons = compose(
  keys,
  filter(k => !!k)
)

module.exports = {
  stories: [
    // `../src/**/*.stories.(${useMDX ? 'mdx' : 'js'})`
    '../packages/@raid-ui/**/*.stories.js'
  ],
  addons: pickAddons(addons)
}
