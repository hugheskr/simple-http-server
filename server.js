var http = require("http");
var fs = require("fs");
const PORT = 3000;

function someRequest(request, response){
  if(request.method == "GET" && request.url == '/') {
    fs.createReadStream("./index.html").pipe(response);
  }else{
    response.write("404 Error");
    response.end();
  }
}

//Create a server
var server = http.createServer(someRequest); //callback

server.listen(PORT, function(){
  console.log("Server listening on: http://localhost", PORT);
});