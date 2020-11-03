
module.exports = {
  plugins: [
    {
      resolve: 'smooth-doc',
      options: {
        name: 'Raid UI Kit',
        description: 'UI components to complement the raid UI component system, can be used to create a design system.',
        author: 'Matt Styles',
        siteUrl: 'https://example.com',
        sections: ['Introduction', 'Guides', 'Components', 'Reference'],
        githubRepositoryURL: 'https://github.com/mattstyles/react-kit',
        baseDirectory: 'packages/docs'
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'barlow semi condensed:700',
          'source sans pro:300,400,400i,700'
        ],
        display: 'swap'
      }
    }
  ]
}
