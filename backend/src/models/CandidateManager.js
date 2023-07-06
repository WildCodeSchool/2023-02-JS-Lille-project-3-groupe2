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
        candidate.phoneNumber,
        candidate.about,
        candidate.picture_url,
        candidate.id,
      ]
    );
  }

  async add(candidate) {
    try {
      await this.database.beginTransaction();

      const query1 =
        "INSERT INTO candidates (lastname, firstname, birthdate, phoneNumber) VALUES (?, ?, ?, ?)";
      const query2 =
        "INSERT INTO address (street_number, street_type, street_name, city, postal_code, department, region, country, candidate_ID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const query3 =
        "INSERT INTO auth (candidate_ID, register_email, password) VALUES (?, ?, ?)";

      const result1 = await this.database.query(query1, [
        candidate.lastname,
        candidate.firstname,
        candidate.birthdate,
        candidate.phoneNumber,
      ]);

      const candidateId = result1.insertId;

      await this.database.query(query2, [
        candidate.street_number,
        candidate.street_type,
        candidate.street_name,
        candidate.city,
        candidate.postal_code,
        candidate.department,
        candidate.region,
        candidate.country,
        candidateId,
      ]);

      await this.database.query(query3, [
        candidateId,
        candidate.register_email,
        candidate.password,
      ]);

      await this.database.commit();
    } catch (error) {
      await this.database.rollback();
      throw error;
    }
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
