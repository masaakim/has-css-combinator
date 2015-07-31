var isCombinator = require('is-css-combinator')

module.exports = function (selector) {
    selector.split('').forEach(function (char) {
        if (isCombinator(char)) return true
    })
    return false
}
