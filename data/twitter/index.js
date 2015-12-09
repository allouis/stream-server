exports.createStream = createStream

var from = require('from')

function createStream (desc) {
  return from(function (count, next) {
    this.emit('data', {
      from: '@donny',
      content: 'Best tweet ever!!! #twitter',
      meta: {}
    })
    this.emit('end')
    return true
  })
}
