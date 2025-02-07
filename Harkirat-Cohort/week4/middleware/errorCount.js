const express = require("express");
const app = express();

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

let errorCount = 0;

app.get("/user", function (req, res) {
  throw new Error("User not found");
  res.status(200).json({ name: "Jhon" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "Created dummy user" });
});

app.get("/errorCount", function (req, res) {
  res.status(200).json({ errorCount });
});

app.use(function (err, req, res, next) {
  res.status(404).json({});
  errorCount++;
});
app.listen(3000);
