// Bartolome, Jed Miguel O.
// WD-201
// server.js
// Second Application
// 02/04/2022

var express = require('Express');

var app = express();


app.get("/", function(req, res){
    res.send("Successfully created the second App!");
});

var server = app.listen (8000,'localhost',function () {
    var host = server.address().address; 
    var port = server.address().port;

    console.log("Server listening at http://%s:%s", host, port);
  });
