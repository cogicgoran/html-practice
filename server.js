import http from 'http';
import fs from "fs";

const articles = ['Gogaric'];

function getListOfArticles(){
    const content = articles.map((item) => `<li>${item}</li>`).join('\n')
    console.log('content:', content)
    return content
}

const server = http.createServer((req,res) => {
    console.log(`Received request, URL: ${req.url}`)
    if (req.url === '/' && req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html; charset=UTF-8')
        res.write(fs.readFileSync('index.html','utf-8'), 'utf-8');
        res.statusCode = 200;
        res.end()
        return;
    }
    if (req.url === '/articles' && req.method === "GET") {
        res.setHeader('Content-Type', 'text/html; charset=UTF-8')
        res.write(`<ul>${getListOfArticles()}</ul>`, 'utf-8');
        res.statusCode = 200;
        res.write
        res.end()
        return;
    }
    if (req.url === '/articles' && req.method === "POST") {
        req.setEncoding('utf-8')
        req.on('data',(data) => {
            const item = data.split('=')[1]
            articles.push(item);
            console.log(`Added item: '${item}'`)
            console.log(articles);
            res.statusCode = 201;
            res.end()
            return;
        })
        return
    }
    res.statusCode = 404
    res.end()
})


server.listen(1337)