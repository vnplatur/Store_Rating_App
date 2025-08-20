import "../../env.js"; // load the environment variable from .env

import mysql from "mysql2";

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "storereating",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// const db = "connect"

export default db;
