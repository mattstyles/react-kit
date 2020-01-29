
const { compose, filter, keys } = require('rambda')

const useMDX = process.env.USE_MDX || false

const addons = {
  '@storybook/addon-actions': true,
  '@storybook/addon-links': true,
  '@storybook/addon-knobs': true,
  '@storybook/addon-backgrounds': true,
  '@storybook/addon-viewport': true,
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
    '../src/controls/*.stories.js'
  ],
  addons: pickAddons(addons)
}
