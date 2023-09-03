var http = require('http');
http.createServer(function (req, res) {
  res.write('Hello World from NodeJS!');
  res.write('Part 3 of week02 assignment');
  res.end();
}).listen(3000, function(){
 console.log("Server running at port 3000");
});
