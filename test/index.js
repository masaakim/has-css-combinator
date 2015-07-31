var test = require('tape')
var hasCombinator = require('..')

test('p+a', function (t) {
    var selector = 'p+a'
    t.equal(hasCombinator(selector), true)
    t.end()
})

test('p +a', function (t) {
    var selector = 'p +a'
    t.equal(hasCombinator(selector), true)
    t.end()
})

test('p+ a', function (t) {
    var selector = 'p+ a'
    t.equal(hasCombinator(selector), true)
    t.end()
})

test('p + a', function (t) {
    var selector = 'p + a'
    t.equal(hasCombinator(selector), true)
    t.end()
})

test('p ~ a', function (t) {
    var selector = 'p + a'
    t.equal(hasCombinator(selector), true)
    t.end()
})

test('p > a', function (t) {
    var selector = 'p + a'
    t.equal(hasCombinator(selector), true)
    t.end()
})
