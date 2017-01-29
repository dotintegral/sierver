var connect = require('connect')
var serveStatic = require('serve-static')
var path = require('path')
var argv = process.argv

connect()
  .use(serveStatic(path.join(__dirname, argv[2])))
  .listen(argv[3], function(){
    console.log('Server running for', argv[2], 'on', argv[3])
  });
