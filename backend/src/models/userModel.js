import db from "../config/db.js";

export const getUsers = (callback) => {
  const query = "SELECT * FROM users";
  db.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};
