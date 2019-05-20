const tapromise = require('tapromise')
const t = require('tap')
const index = require('./index.js')

t.test('No args', function (t) {
  t = tapromise(t)
  const output = index()
  return t.notOk(output)
})

t.test('--diag', function (t) {
  t = tapromise(t)
  const diagOutput = index({
    diag: true,
    d: true
  })
  return Promise.all([
    t.type(diagOutput, 'object'),
    t.type(diagOutput.then(r => r[0].title), 'string'),
    t.type(diagOutput.then(r => r[0].link), 'string')
  ])
})
