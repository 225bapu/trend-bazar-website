// server.js
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "YOUR_MYSQL_PASSWORD", // <-- replace with your MySQL password
  database: "mini_shop"
});

db.connect(err => {
  if (err) {
    console.log("Error connecting to MySQL:", err);
  } else {
    console.log("MySQL connected!");
  }
});

// Sample route to get products
app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
