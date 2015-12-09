var data = require('./data')
var db = require('./db')
var http = require('http')
var through = require('through2')
var transforms = require('./transforms')

var server = http.createServer()

server.on('request', function (req, res) {
  var dbStream = db.get(req)
  var transformsStream = transforms.get(dbStream)
  var dataStream = data.get(dbStream)

  dataStream.pipe(transformsStream).pipe(through.obj(function (data, enc, next) {
    this.push(JSON.stringify(data))
    next()
  })).pipe(res)
})

server.listen(3310)
