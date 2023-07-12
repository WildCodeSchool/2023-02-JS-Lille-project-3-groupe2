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

  delete(id) {
    return this.database.query(
      `
      DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
  }

  getAccountByEmail(email) {
    return this.database.query(
      `
    SELECT * FROM ${this.table} WHERE register_email = ?`,
      [email]
    );
  }
}

module.exports = AuthManager;
