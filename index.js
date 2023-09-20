import express from "express";

const app = express();

app.listen(5002, () => console.log("Api running on port 5001..."));

app.get("/hello", (req, res) => {
  const body = req.body;
  console.log("Server has been accessed");
  res.json(body);
});

app.get("/", (req, res) => {
  console.log("Server has been accessed");
  res.json("My API running! :)");
});
