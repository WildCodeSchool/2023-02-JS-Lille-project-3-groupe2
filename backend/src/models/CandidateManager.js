const AbstractManager = require("./AbstractManager");

class CandidateManager extends AbstractManager {
  constructor() {
    super({ table: "candidate" });
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  find(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  update(candidate) {
    return this.database.query(
      `
      UPDATE ${this.table} SET lastname = ?, firstname = ?, birthdate = ?, phone_number = ?, about = ?, picture_url = ? WHERE id = ?`,
      [
        candidate.lastname,
        candidate.firstname,
        candidate.birthdate,
        candidate.phone_number,
        candidate.about,
        candidate.picture_url,
        candidate.id,
      ]
    );
  }

  delete(id) {
    return this.database.query(
      `
      DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
  }
}

module.exports = CandidateManager;
