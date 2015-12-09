exports.createStream = createStream

var through = require('through2')

function createStream () {
  return through.obj(function (data, enc, next) {
    data.meta.hashtags = getHashtags(data.content)
    this.push(data)
    next()
  })
}

function getHashtags (text) {
  return text.match(/(#[a-z0-9][a-z0-9\-_]*)/ig)
}
