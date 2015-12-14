exports.createStream = createStream

var from = require('from2')

function createStream (desc) {
  return from.obj(function (count, next) {
    this.emit('data', {
      from: 'fabien@don.ny',
      content: 'Subject: Hello World\n Hi this is a test email, please do not respond to this email, blah blah blah blah blah blah blah\n\n If you think you recieved this in error, please contact our support team who are active 24/7 365Regards, Fabien',
      meta: {}
    })
    this.emit('end')
    return true
  })
}

