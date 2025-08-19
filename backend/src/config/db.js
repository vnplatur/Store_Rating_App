import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "storereating",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// const db = "connect"

export default db;
