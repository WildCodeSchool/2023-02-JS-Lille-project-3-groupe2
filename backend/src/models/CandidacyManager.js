const AbstractManager = require("./AbstractManager");

class CandidacyManager extends AbstractManager {
  constructor() {
    super({ table: "candidacy" });
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  find(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  update(candidacy) {
    return this.database.query(
      `
      UPDATE ${this.table} SET email_contact = ?, candidacy_date = ?, status = ?, cv_url = ?, motivation_letter_url = ? WHERE id = ?`,
      [
        candidacy.email_contact,
        candidacy.application_date,
        candidacy.status,
        candidacy.cv_url,
        candidacy.motivation_letter_url,
        candidacy.id,
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

module.exports = CandidacyManager;
