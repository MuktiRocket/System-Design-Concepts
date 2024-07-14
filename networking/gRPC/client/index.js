const client = require("./client");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  client.getAll(null, (err, data) => {
    if (!err) {
      res.send(data.customers);
    }
  });
});

app.post("/create", (req, res) => {
  let newCustomer = {
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
  };

  client.insert(newCustomer, (err, data) => {
    if (err) {
      throw err;
    }
    console.log("inserted: ", data);
    res.send({ message: "Customer inserted successfully" });
  });
});

app.post("/update", (req, res) => {
  let updateCustomer = {
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
  };

  client.update(updateCustomer, (err, data) => {
    if (err) {
      throw err;
    }
    console.log("updated: ", data);
    res.send({ message: "Customer updated successfully" });
  });
});

app.post("/remove", (req, res) => {
  client.remove({ id: req.body.id }, (err, data) => {
    if (err) {
      throw err;
    }

    console.log("removed: ", data);
    res.send({ message: "Customer removed successfully" });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
