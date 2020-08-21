
const { ui } = require('@raid/rk/lib/babel')

console.log('using', JSON.stringify(ui(), null, '  '))

module.exports = ui()
