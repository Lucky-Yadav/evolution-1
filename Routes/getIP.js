const express = require("express");

const getmeIP = require("../Handlers/getIP");

const getIP = express.Router();

getIP.get("/", (req, res) => {
  res.send("My first backened evolution :-:");
});


getIP.post("/getmeip", getmeIP);

module.exports = getIP;
