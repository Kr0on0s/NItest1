const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


function changeColor(){
    const body = document.querySelector("body")
    body.style.backgroundColor = `rgb(${getRandomArbitrary(0,255)},${getRandomArbitrary(0,255)},${getRandomArbitrary(0,255)})`;
}   



const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});