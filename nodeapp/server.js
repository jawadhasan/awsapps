const http = require('http');
const port = process.env.PORT || 3000;

let counter = 0;
const requestListner = (req, res)=> {
	counter += 1;
	let now = new Date().toString();
    res.end(`Hello world from NodeJS APP! ${now}`);
}
//Notice, a function reference is passed not a function call
//const server = http.createServer(requestListner);

//using the event-emitter API
const server = http.createServer();
server.on("request", requestListner);

server.listen(port, function(){
    console.log(`server is listening on port: ${port}`);
});