import http from 'http';
import fs from "fs";

const server = http.createServer((req,res) => {
    console.log(`Received request, URL: ${req.url}`)
    if (req.url === '/') {
        res.write(fs.readFileSync('index.html'));
        res.statusCode = 200;
        res.end()
        return;
    }
    if (req.url === '/articles') {
        res.write('<ul><li>Gogaric</li></ul>');
        res.statusCode = 200;
        res.end()
        return;
    }
    res.statusCode = 404
    res.end()
})


server.listen(1337)