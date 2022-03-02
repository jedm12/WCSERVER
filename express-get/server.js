// Bartolome, Jed Miguel O.
// WD-201
// server.js
// Express get
// 02/04/2022
var express = require('express');
var app = express();


app.use(express.static('public'))
app.get('/index.html', function(req, res){
    res.sendFile(__dirname + "/" + "index.html");
});

app.get('/process_get', function(req, res){
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name,
        course: req.query.course,
        age: req.query.age,
        comments: req.query.comments
    };
    console.log(response);
    res.end(JSON.stringify(response))
});


var server = app.listen (4600, 'localhost' ,function () {
    var host = server.address().address; 
    var port = server.address().port;

    console.log("Server listening at http://%s:%s", host, port);
  });