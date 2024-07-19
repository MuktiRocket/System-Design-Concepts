const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "frame-ancestors 'none'");

  res.cookie("sessionId", "12345", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
  next();
});

app.use(express.static("public"));

app.get("/example1", (req, res) => {
  res.sendFile(__dirname + "/public/example1.html");
});

app.get("/example2", (req, res) => {
  res.sendFile(__dirname + "/public/example2.html");
});

app.get("/example3", (req, res) => {
  res.sendFile(__dirname + "/public/example3.html");
});

const port = process.env.PORT || 5010;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
