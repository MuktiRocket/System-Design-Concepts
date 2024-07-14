import bodyParser from "body-parser";
import express from "express";

const app = express();
app.use(bodyParser.json());

app.all("/", (req, res) => {
  res.send("I'am up!");
});

const todos = [
  {
    id: "1",
    title: "Task 1",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    completed: true,
  },
];
//read
app.get("/todos", (req, res) => {
  res.json(todos);
});
//create
app.post("/todos", (req, res) => {
  const newData = req.body;
  todos.push(newData);
  res.json({
    message: "Task created",
  });
});

//update
app.put("/todos/:id", (req, res) => {
  const newData = req.body;
  const todoIndex = todos.findIndex((td) => td.id === req.params.id);
  if (todos !== -1) {
    todos[todoIndex] = {
      id: req.params.id,
      ...newData,
    };
  }

  res.json({
    message: "Task updated",
  });
});

//delete
app.delete("/todos/:id", (req, res) => {
  const newData = req.body;
  const todoIndex = todos.findIndex((td) => td.id === req.params.id);
  if (todos !== -1) {
    todos.splice(todoIndex, 1);
  }
  res.json({
    message: "Task deleted",
  });
});

//head

const port = 5111;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
