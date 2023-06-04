"use strict";

import http from "http";

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(req.url);
    res.end();
  })
  .listen(3000, (_) => console.log("server is running...."));
