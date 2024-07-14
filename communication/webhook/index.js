const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  const payload = req.body;
  console.log(payload);
  res.status(200).send("Webhook received successfully");
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
