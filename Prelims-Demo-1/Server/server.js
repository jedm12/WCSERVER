var http = require('http'); // Import Node.js core module

var server = http.createServer(function(req,res){

    //set response header
    if (req.url == '/'){
        res.writeHead(200, {'Content-Type' : 'text/html'});

        res.write('<html><body><p> This is home page. </p></body></html>')
        res.end();


    }else if (req.url == "/student"){

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('<html><body><p> This is Student Page. </p></body></html>')
        res.end();
        
    }
    else if (req.url == "/admin"){

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('<html><body><p> This is admin Page. </p></body></html>')
        res.end();
        
    }
    else
        res.end('Invalid Request!')
    

});

server.listen(5000);
console.log('NodeJS localhost at port 5000 is running... ')