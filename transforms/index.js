module.exports.get = get

var duplexify = require('duplexify')
var hashtag = require('./hashtag')
var shout = require('./shout')
var stream = require('stream')
var truncate = require('./truncate')

var transforms = { hashtag, shout, truncate }

function get (dbStream) {
  var dup = duplexify.obj()

  dbStream.on('data', function (dataSourceDescription) {
    var transforms = dataSourceDescription.transforms
    var transformStreams = transforms.map(getStream)
    var input = transformStreams[0]
    var output = transformStreams.reduce(pipe, new stream.PassThrough())

    dup.setWritable(input)
    dup.setReadable(output)
  })

  return dup
}

function getStream (type) {
  return transforms[type].createStream()
}

function pipe (from, to) {
  return from.pipe(to)
}
