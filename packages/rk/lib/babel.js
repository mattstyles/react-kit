
exports.ui = () => {
  return {
    presets: [
      ['@babel/preset-env', {
        targets: '>2%',
        modules: false,
        loose: true
      }],
      '@babel/preset-react'
    ],
    plugins: [
      'styled-components',
      'transform-react-require',
      '@babel/plugin-proposal-object-rest-spread'
    ]
  }
}

exports.core = () => {
  return {
    presets: [
      ['@babel/preset-env', {
        targets: '>2%',
        modules: false,
        loose: true
      }]
    ],
    plugins: [
      '@babel/plugin-proposal-object-rest-spread'
    ]
  }
}
