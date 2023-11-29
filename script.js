import http from 'node:http'
import fs from 'node:fs'
import { indexHTML } from './modules/functions.js'

const PORT = 8080
const ENCODING = 'utf-8'
const responseHeaders = {
  'Content-Type': 'text/html',
}

const server = http.createServer(response)
server.listen(PORT, _ => {
  console.log('Server is running on Port', PORT)
})

function response(req, res) {
  let url = req.url;
  console.log(url)

  indexHTML(req, res, fs);

  if (url == '/api') {
    let users = fs.readFileSync('./modules/userData.json', ENCODING)

    responseHeaders['Content-Type'] = 'application/json';
    res.writeHead(200, responseHeaders)
    return res.end(users)
  }
}

