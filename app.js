const port = process.env.PORT || 3000;
const http = require('http');
const fs = require('fs');


http.createServer((req, res) => {
  if (req.url.indexOf('/img') !== -1) {
    var filePath = req.url.split('/img')[1];
    fs.readFile(`${__dirname}/public/img${filePath}`, (err, data) => {
      if (err) console.log(err);
      res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
      res.write(data);
      res.end();
    });
  } else if (req.url.indexOf('/js') !== -1) {
    var filePath = req.url.split('/js')[1];
    fs.readFile(`${__dirname}/src/js${filePath}`, (err, data) => {
      if (err) console.log(err);
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else if (req.url.indexOf('/css') !== -1) {
    var filePath = req.url.split('/css')[1];
    fs.readFile(`${__dirname}/public/css${filePath}`, (err, data) => {
      if (err) console.log(err);
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile(`${__dirname}/public/index.html`, (err, data) => {
      if (err) console.log(err);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
}).listen(port, '0.0.0.0');
