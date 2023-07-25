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
    SELECT e.social_denomination AS enterprise_title, c.application_date, c.status, o.title
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

  async createCandidacy(candidateId, offerId, candidacyData) {
    const query = `
    INSERT INTO candidacy (candidate_ID, offer_ID, email_contact, application_date, cv_url, motivation_letter_url)
    VALUES (?, ?, ?, NOW(), ?, ?);
  `;
    try {
      const result = await this.database.query(query, [
        candidateId,
        offerId,
        candidacyData.email_contact,
        candidacyData.cv_url,
        candidacyData.motivation_letter_url,
      ]);
      return result; // ou vous pouvez retourner un message de succès
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // update a candidacy

  async updateCandidacy(candidateId, candidacyId, candidacyData) {
    const query = `
    UPDATE candidacy
    SET application_date = NOW(),
        cv_url = ?,
        motivation_letter_url = ?
    WHERE ID = ? AND candidate_ID = ?;
  `;
    try {
      const result = await this.database.query(query, [
        candidacyData.cv_url,
        candidacyData.motivation_letter_url,
        candidacyId,
        candidateId,
      ]);
      return result; // ou vous pouvez retourner un message de succès
    } catch (error) {
      console.error(error);
      throw error;
    }
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
