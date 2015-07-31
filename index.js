var isCombinator = require('is-css-combinator')

module.exports = function (selector) {
    var ret = false
    selector.split('').forEach(function (char) {
        if (isCombinator(char)) ret = true
    })
    return ret
}
