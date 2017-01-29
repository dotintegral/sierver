var http = require('http')
var httpProxy = require('http-proxy')
var rules = require('./rules.json')

var proxy = httpProxy.createProxy();

http.createServer(function(req, res) {
	var host = req.headers.host

	if (rules[host]) {
		return proxy.web(req, res, {
			target: "http://localhost:" + rules[host]
		});
	}

  res.writeHead(404, { 'Content-Type': 'text/plain' })
  res.end('Not found at all')

}).listen(80, function () {
  console.log('listening on 80')
});
