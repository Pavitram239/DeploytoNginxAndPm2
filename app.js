const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  fs.readFile("db.json", (err, data) => {
    if (err) {
      res.status(500).send("Something went wrong");
    } else {
      res.status(200).json(JSON.parse(data));
    }
  });
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
