const express = require("express");
const app = express.Router();

app.get("/trends", (req, res) => {
  res.json({ message: "Google Trends data will be here" });
});

module.exports = router;
