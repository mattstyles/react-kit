
const { compose, filter, keys } = require('rambda')

const useMDX = process.env.USE_MDX || false

const addons = {
  '@storybook/addon-actions': true,
  '@storybook/addon-links': true,
  '@storybook/addon-knobs': true,
  '@storybook/addon-backgrounds': true,
  '@storybook/addon-viewport': true,
  '@storybook/addon-docs': useMDX
}

const pickAddons = compose(
  keys,
  filter(k => !!k)
)

console.log(pickAddons(addons))
console.log(`../src/**/*.stories.${useMDX ? 'mdx' : 'js'}`)

module.exports = {
  // stories: ['../src/**/*.stories.(js|mdx)' + useMDX ? ''],
  stories: [
    `../src/**/*.stories.(${useMDX ? 'mdx' : 'js'})`
  ],
  addons: pickAddons(addons)
  // addons: [
  //   '@storybook/addon-actions',
  //   '@storybook/addon-links',
  //   '@storybook/addon-knobs',
  //   '@storybook/addon-backgrounds',
  //   '@storybook/addon-viewport',
  //   // '@storybook/addon-docs'
  //   // '@storybook/addon-notes/register'
  // ]
}
