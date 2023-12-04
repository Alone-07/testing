import http from 'node:http'
// import https from 'node:https'
import fs from 'node:fs'
import { default as indexHTML } from './modules/functions.js'


const PORT = process.env.PORT = 3300
const options = {
  key: fs.readFileSync('./certificates/key.pem'),
  cert: fs.readFileSync('./certificates/cert.pem'),
};


// https.createServer(options, (req, res) => {
//   if (req.url == '/api') {
//     res.writeHead(200, { 'Content-Type': 'applications/json' })
//     res.write('{"name": "krish",}')
//     res.end()
//   }
//   indexHTML(req, res, fs)
// }).listen(PORT, () => console.log('https server is running on PORT', PORT))
//

const server = http.createServer((req, res) => {
  if (req.url == '/api') {
    res.writeHead(200, { 'Content-Type': 'applications/json' })
    res.write('{"name": "krish",}')
    res.end()
  }
  indexHTML(req, res, fs)
})

server.listen(PORT, _ => console.log('http server is runnng on port', PORT))
