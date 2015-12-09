exports.createStream = createStream

var through = require('through2')

function createStream () {
  return through.obj(function (data, enc, next) {
    data.content = data.content.toUpperCase() + '!!!'
    this.push(data)
    next()
  })
}
