exports.createStream = createStream

var from = require('from2')

function createStream (desc) {
  return from.obj(function (count, next) {
    this.emit('data', {
      from: '@donny',
      content: 'Best tweet ever!!! #twitter',
      meta: {}
    })
    this.emit('end')
    return true
  })
}
