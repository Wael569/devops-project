
const mysql = require("mysql2");

// Create a connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",   // Use your MySQL password (default in XAMPP is "")
  database: "tp_formulair"  // Make sure this database exists
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("❌ Error connecting to MySQL:", err.message);
  } else {
    console.log("✅ Connected to MySQL database!");
  }
});

module.exports = db;
