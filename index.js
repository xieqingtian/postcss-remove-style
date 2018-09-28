var postcss = require('postcss')
module.exports = postcss.plugin('postcss-remove-style', function(opts) {
    opts = opts || {}
    return function(css, result) {
        for (let selector in opts) {
            if (selector === '*') {
                opts[selector].forEach(function(prop) {
                    css.walkDecls(prop, function(decl) {
                        decl.remove()
                    })
                })
            } else {
                css.walkRules(function(rule) {
                    const styles = opts[rule.selector]
                    if (styles) {
                        if (styles === '*') {
                            rule.remove()
                        } else {
                            rule.walkDecls(function(decl) {
                                if (styles.indexOf(decl.prop) !== -1) {
                                    decl.remove()
                                }
                            })
                        }
                    }
                })
            }
        }
    }
})
