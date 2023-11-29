
function indexHTML(req, res, fs) {
  let ENCODING = 'utf-8';
  if (req.url == '/' || req.url == 'index.html') {
    let html = fs.readFileSync('./index.html', ENCODING)
    res.writeHead(200, { 'Content-Type': 'text/html' })
    return res.end(html)
  } else if (req.url == '/index.js') {
    let js = fs.readFileSync('./index.js', ENCODING)
    res.writeHead(200, { 'Content-Type': 'text/js' })
    return res.end(js)
  } else if (req.url == '/style.css') {
    let css = fs.readFileSync('./style.css', ENCODING)
    res.writeHead(200, { 'Content-Type': 'text/css' })
    return res.end(css)
  }
}

export { indexHTML }
