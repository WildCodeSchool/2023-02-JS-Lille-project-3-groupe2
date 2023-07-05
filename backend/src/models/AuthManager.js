const AbstractManager = require("./AbstractManager");

class AuthManager extends AbstractManager {
  constructor() {
    super({ table: "auth" });
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  find(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  /* update(compte) {
    return this.database.query(
      `
      UPDATE ${this.table} SET nom = ?, prenoms = ?, date_naissance = ?, numero_telephone = ?, a_propos = ?, photo_url = ? WHERE id = ?`,
      [
        compte.nom,
        compte.prenoms,
        compte.date_naissance,
        compte.numero_telephone,
        compte.a_propos,
        compte.photo_url,
        compte.id,
      ]
    );
  } */

  delete(id) {
    return this.database.query(
      `
      DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
  }
}

module.exports = AuthManager;
