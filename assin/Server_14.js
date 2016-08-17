var http = require("http");
function onRequest(request, response){
console.log("Request resived");
response.writeHead(200, {"Content-Type":"Text/Plan"});
response.write("Hellow Assaf");
response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server had started");