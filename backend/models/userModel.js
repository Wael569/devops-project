const db = require("../config/db");

const User = {
  create: (data, callback) => {
    const sql = "INSERT INTO users (nom, prenom, email, billet, conditions) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [data.nom, data.prenom, data.email, data.billet, data.conditions], callback);
  },

  getAll: (callback) => {
    const sql = "SELECT * FROM users";
    db.query(sql, callback);
  },

  update: (id, data, callback) => {
    const sql = "UPDATE users SET nom=?, prenom=?, email=?, billet=?, conditions=? WHERE id=?";
    db.query(sql, [data.nom, data.prenom, data.email, data.billet, data.conditions, id], callback);
  },

  delete: (id, callback) => {
    const sql = "DELETE FROM users WHERE id=?";
    db.query(sql, [id], callback);
  }
};

module.exports = User;
