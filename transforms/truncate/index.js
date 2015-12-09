exports.createStream = createStream

var through = require('through2')

function createStream () {
  return through.obj(function (data, enc, next) {
    data.content = data.content.slice(0, 137) + '...'
    this.push(data)
    next()
  })
}

