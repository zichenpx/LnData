const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mysql = require("mysql");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const COUNT_PER_PAGE = 15;

const connection = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: "nba",
  port: "3306",
});

//Establish MySQL connection
connection.connect(function (err) {
  if (err) throw err;
  else {
    console.log("Connected to MySQL");
    // app.listen(3000, function(){
    //   console.log("Server listening on port 3000");
    // });
  }
});

// check
app.get("/", function (req, res) {
  res.send({
    status: "Healthy",
    location: "nba",
  });
});

// Get all players
app.get("/all", function (req, res) {
  connection.query(
    "SELECT * FROM nba.players;",
    function (err, results, fields) {
      
      if (err) {
        res.send("Error");
      } else {
        res.send(
          {
            "results": results
          }    
        );
      }
      // if (err) throw error;
      // console.log(results[0]);
    }
  );
});

// Get teams' names
app.get("/teams", function (req, res) {
  connection.query(
    "SELECT DISTINCT team_name FROM nba.players;",
    function (err, results, fields) {
      if (err) {
        res.send("Error");
      } else {
        res.send(results);
      }
    }
  );
});

app.listen(3000, function () {
  console.log("Server listening on port 3000");
});

// app.listen(9999, function () {
//   console.log("Server started on port 3000");
// });
