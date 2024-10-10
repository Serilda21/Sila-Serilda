const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let filePath = "." + q.pathname;
    if (filePath === './') {
        filePath = './index.html'; // Default to the home page
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 404; // Page not found
            res.setHeader('Content-Type', 'text/html');
            return res.end("404 Page Not Found");
        }
        res.statusCode = 200; // Success
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        return res.end();
    });
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
