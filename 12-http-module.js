const http = require('http');

const server = http.createServer((req,res) => {
  if(req.url === '/') {
    res.end('welcome to my homepage')
    return;
  }
  if(req.url === '/about'){
    res.end('here is our short history')
    return;
  }
  res.end(`
<h1>OOPS!!</h1>
<p>We can't seem to find the page you are lookking for </p>
<a href="/">home</a>
  `)
})

server.listen(5000)