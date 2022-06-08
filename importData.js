const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const mysql = require("mysql");

const app = express();

// Configure MySQL connection
let connection = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: "nba",
});

//Establish MySQL connection
connection.connect(function (err) {
  if (err) throw err;
  else {
    console.log("Connected to MySQL");
  }
});

app.use(bodyParser.json());

function insertPlayers() {
  let data = fs.readFile("./players.json", { encoding: "utf8" });
  path.join(__dirname + "/Players.json");
}
