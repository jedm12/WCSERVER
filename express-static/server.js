// Bartolome, Jed Miguel O.
// WD-201
// server.js
// Express Static
// 02/04/2022

var express = require('Express');
var app = express();


app.use(express.static('public'))
app.get('/', function(req, res, next){
    res.send("Successfully created the second App!");
});

var server = app.listen (7700, 'localhost', function () {
    var host = server.address().address; 
    var port = server.address().port;

    console.log("Server listening at http://%s:%s", host, port);
  });
