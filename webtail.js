var http = require ('http');
var spawn = require('child_process').spawn;
http.createServer(function (request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    
 
    var tail =spawn('tail',['-f','/var/log/syslog']);           
    response.connection.on('end',function(){
    tail.kill();
    });
    tail.stdout.on('data',function(data){
    response.write(data);
    console.log(data.toString()); 
    });
    
    }).listen(8888);
