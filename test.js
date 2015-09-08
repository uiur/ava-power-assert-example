var test = require('ava')

test(function (t) {
  t.plan(1)

  setTimeout(function () {
    t.ok('bar' === 'bar')
  }, 100)
})

test('fails', function (t) {
  t.plan(1)
  var a = { name: 'foo' }
  var b = { name: 'bar' }

  t.ok(a.name === b.name)
})
