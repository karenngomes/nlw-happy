import express from "express";
import "./database/connection";

const app = express();

app.use(express.json())

app.post("/users/:id", (request, response) => {
  console.log(request.query);
  console.log(request.query);
  console.log(request.body);

  return response.json({ message: "Hello world" });
});

app.listen(3333);
