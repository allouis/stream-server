module.exports.get = get

var levelup = require('level')

var store = levelup('./store', {
  valueEncoding: 'json'
})

function get (req) {
  var id = req.url.slice(1)

  return store.createReadStream({
    gte: id,
    lte: id,
    keys: false
  })
}

if (!module.parent) {
  store.put('0001', {
    data: { type: 'twitter' },
    transforms: ['hashtag']
  })
  store.put('0002', {
    data: { type: 'twitter' },
    transforms: ['hashtag', 'shout']
  })
  store.put('0003', {
    data: { type: 'twitter' },
    transforms: ['shout']
  })
  store.put('0004', {
    data: { type: 'email' },
    transforms: ['shout', 'truncate']
  })
  store.put('0005', {
    data: { type: 'email' },
    transforms: ['truncate']
  })
}
