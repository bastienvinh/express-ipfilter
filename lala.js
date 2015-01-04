var express = require('express');
var path = require('path');
var ipfilter = require('./lib/ipfilter');

var app = express();
var ips = ['192.168.1.12'];

// view engine setup
app.set('views', path.normalize( path.join(__dirname, '/../../views') ));
app.set('view engine', 'hjs');
app.use( ipfilter(ips, { mode: 'allow' }) );

var server = app.listen( 8080, '127.0.0.1', function() {
    var host = server.address().address;
    var ip = server.address().port;
    console.log( "Started Site : %s:%s\n", host, ip );
});
