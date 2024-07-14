const express = require("express");
const app = express();

let data = "Initial data";
let waitingList = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/getData", (req, res) => {
  if (data !== req.query.lastData) {
    res.json({ data });
  } else {
    waitingList.push(res);
  }
});

app.get("/updateData", (req, res) => {
  data = req.query.lastData;
  while (waitingList.length > 0) {
    const client = waitingList.pop();
    client.json({
      data,
    });
  }

  res.send({ success: true });
});

const port = process.env.PORT || 5011;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
