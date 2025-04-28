const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer();

const PORT = 8080;
const HOSTNAME = "127.0.0.1"; // -> LOOPBACK

server.on("request", (request, response) => {
  const result = fs.readFileSync("./text.txt");
  response.setHeader("Content-Type", "text/plain");
  response.end(result);
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server has started on:`, server.address());
});
