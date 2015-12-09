module.exports.get = get

var duplexify = require('duplexify')
var email = require('./email')
var twitter = require('./twitter')

var dataSources = { email, twitter }

function get (dbStream) {
  var dup = duplexify.obj()

  dbStream.on('data', function (dataSourceDescription) {
    var dataStream = getStream(dataSourceDescription)
    dup.setReadable(dataStream)
  })

  return dup
}

function getStream (desc) {
  return dataSources[desc.data.type].createStream(desc)
}
