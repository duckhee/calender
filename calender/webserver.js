var express = require('express') ;
var http = require('http') ;

var app = express() ;



app.set('port', process.env.PORT || 5000) ;

app.use('/', function(request, response, next) {

	

} ) ;



http.createServer.listen(app.get('port'), function(){
	console.log('server start localhost: ' + app.get('port')) ;
} ;


