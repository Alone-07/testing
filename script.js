import http from 'node:http'
import fs from 'node:fs'
import { default as indexHTML } from './modules/functions.js'


const PORT = process.env.PORT = 3300
console.log(PORT)
const server = http.createServer((req, res) => {
  console.log(req.url)
  indexHTML(req, res, fs)
})

server.listen(PORT, () => {
  console.log('Server is running on PORT', PORT)
})
