function route(handle,pathname,response){
    if(typeof handle[pathname] == 'function'){
    console.log('About to route a request for ' + pathname );
    handle[pathname](response);
    }
    else {
    console.log('No request handler for '+pathname);
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("404 Not Found");
    response.end();
    }
}
exports.route = route;
