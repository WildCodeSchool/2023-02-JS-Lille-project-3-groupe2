const AbstractManager = require("./AbstractManager");

class CandidacyManager extends AbstractManager {
  constructor() {
    super({ table: "candidacy" });
  }

  // find all candidacy

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  // find a candidacy by id

  find(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  async getCandidaciesByCandidateId(candidateId) {
    const query = `
    SELECT e.social_denomination AS enterprise_title, c.application_date, c.status
    FROM candidacy c
    JOIN offer o ON c.offer_ID = o.ID
    JOIN enterprise e ON o.enterprise_ID = e.ID
    WHERE c.candidate_ID = ?;
  `;

    try {
      const [rows] = await this.database.query(query, [candidateId]);
      return rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  // update a candidacy

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

  // delete a candidacy

  delete(id) {
    return this.database.query(
      `
      DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
  }
}

module.exports = CandidacyManager;
