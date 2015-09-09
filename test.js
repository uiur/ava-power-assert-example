var test = require('ava')
var deepEqual = require('deep-equal')

// t.true(true)
// t.is('foo', 'foo');
// t.not('foo', 'bar');
// t.same({a: 'a'}, {a: 'a'});
// t.regexTest(/^abc$/, 'abc');

// t.ok(true)
// t.ok('foo' === 'foo')
// t.ok('foo' !== 'bar')
// t.ok(deepEqual({a: 'a'}, {a: 'a'}))
// t.ok(/^abc$/.test('ab'))

test((t) => {
  t.ok(true)

  t.end()
})

test((t) => {
  var a = { name: 'foo' }

  // t.is(a.name, 'bar')
  t.ok(a.name === 'bar')

  t.end()
})

test((t) => {
  var a = { name: 'foo' }

  // t.not(a.name, 'foo')
  t.ok(a.name !== 'foo')

  t.end()
})

test((t) => {
  var a = ['a', 'b']
  var b = ['a', 'a']

  t.ok(deepEqual(a, b))
  t.end()
})

test((t) => {
  var s = 'a'
  t.ok(/^abc$/.test(`ab${ s }`))
  t.end()
})
