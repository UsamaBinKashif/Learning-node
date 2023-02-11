const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
