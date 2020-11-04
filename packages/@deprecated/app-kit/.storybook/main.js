
const addons = [
  '@storybook/addon-actions',
  '@storybook/addon-links',
  '@storybook/addon-knobs',
  '@storybook/addon-backgrounds'
  // '@storybook/addon-viewport'
]

module.exports = {
  stories: [
    '../src/**/*.stories.js'
  ],
  addons: addons
}
