const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");

const app = express();
const server = createServer(app);

app.get("/sse", (req, res) => {
  //sse logic'
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("connection", "keep-alive");
  res.setHeader("Cache-Control", "no-cache");
  res.write(`Write: welcome to the Server Sent Events\n\n`);
  const intervalId = setInterval(() => {
    res.write(`data: Server Time ${new Date().toLocaleDateString()}\n\n`);
  }, 5000);

  req.on("close", () => {
    clearImmediate(intervalId);
  });
});

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

server.listen(3000, () => {
  console.log(`listening on ${3000}`);
});
