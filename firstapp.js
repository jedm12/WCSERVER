// Bartolome, Jed Miguel O.
// WD-201
// firstapp.js
// first Application.
// 02/04/2022
const { response } = require("Express");
var express = require("Express");

var app = express();

app.get("/", function(request, response){
  response.send("Hello World!");
});

app.listen(3700, function(){
  console.log('Server running at http://localhost:3700')
}
);