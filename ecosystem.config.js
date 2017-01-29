var rules = require('./rules.json')

config = {
  apps : [
    {
      name      : "Router",
      script    : "./router.js"
    }
  ],
}

Object.keys(rules).forEach(function (host) {
  var port = rules[host]

  config.apps.unshift({
    name      : host,
    script    : "./server.js",
    args      : host + " " + port
  })
})


module.exports = config
