const express = require("express");
var app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Method", "GET, POST, DELETE");
  next();
});

app.get("/get", (req, res) => {
  console.log("qwert");
  res.status(200).send("This is from the backend");
});

app.listen(4000, () => console.log("Example app listening on port 4000"));
