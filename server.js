var express = require('express');
logger = require('morgan')('dev'),
server = express();

var port = process.env.PORT || 8080;

server.use(express.static(__dirname+'/public'));
server.use(logger);

server.get('/', function(req, res){
 res.sendFile('public/index.html', {root: __dirname});
});

server.listen(8080, function () {
 console.log('Now listen on port'+ 8080);
});
