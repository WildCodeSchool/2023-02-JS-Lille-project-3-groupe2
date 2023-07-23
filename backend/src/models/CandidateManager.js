const AbstractManager = require("./AbstractManager");

class CandidateManager extends AbstractManager {
  constructor() {
    super({ table: "candidate" });
  }

  // find all candidate

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  // find a canidate by id

  find(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  findCandidateByAccountId(id) {
    return this.database.query(`SELECT * FROM candidate where auth_ID = ?`, [
      id,
    ]);
  }
  // update candidate information

  async updateCandidate(candidate) {
    const updateQuery1 =
      "UPDATE auth SET register_email = ?, password = ?, account_type = ? WHERE auth_ID = ?";
    const updateQuery2 =
      "UPDATE candidate SET lastname = ?, firstname = ?, birthdate = ?, phone_number = ?, about = ?, picture_url = ? WHERE ID = ?";
    const updateQuery3 =
      "UPDATE address SET street_number = ?, street_type = ?, street_name = ?, city = ?, postal_code = ?, department = ?, region = ?, country = ? WHERE candidate_ID = ?";

    try {
      const { candidateID } = candidate;
      const { authID } = candidate;

      await this.database.query(updateQuery1, [
        candidate.registerEmail,
        candidate.hashedPassword,
        candidate.accountType,
        authID,
      ]);

      await this.database.query(updateQuery2, [
        candidate.lastname,
        candidate.firstname,
        candidate.birthdate,
        candidate.phoneNumber,
        candidate.about,
        candidate.pictureUrl,
        candidateID,
      ]);

      await this.database.query(updateQuery3, [
        candidate.streetNumber,
        candidate.streetType,
        candidate.streetName,
        candidate.city,
        candidate.postalCode,
        candidate.department,
        candidate.region,
        candidate.country,
        candidateID,
      ]);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  // get all bookmarks for a candidate

  async getBookmarks(candidateId) {
    try {
      const query = `
      SELECT o.ID, o.title, o.descriptions, o.offer_date
      FROM externatic.offer o
      INNER JOIN externatic.bookmarks b ON o.ID = b.offer_ID
      WHERE b.candidate_ID = ? `;

      const results = await this.database.query(query, [candidateId]);
      return results;
    } catch (error) {
      await this.database.rollback();
      throw error;
    }
  }

  async add(candidate) {
    const query1 =
      "INSERT INTO auth (register_email, password, account_type) VALUES ( ?, ?, ?)";
    const query2 =
      "INSERT INTO candidate (auth_ID, lastname, firstname, birthdate, phone_number, about, picture_url) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const query3 =
      "INSERT INTO address (street_number, street_type, street_name, city, postal_code, department, region, country, candidate_ID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    try {
      const [result1] = await this.database.query(query1, [
        candidate.registerEmail,
        candidate.hashedPassword,
        candidate.accountType,
      ]);

      const authID = result1.insertId;

      const [result2] = await this.database.query(query2, [
        authID,
        candidate.lastname,
        candidate.firstname,
        candidate.birthdate,
        candidate.phoneNumber,
        candidate.about,
        candidate.pictureUrl,
      ]);
      const candidateID = result2.insertId;

      const [result3] = await this.database.query(query3, [
        candidate.streetNumber,
        candidate.streetType,
        candidate.streetName,
        candidate.city,
        candidate.postalCode,
        candidate.department,
        candidate.region,
        candidate.country,
        candidateID,
      ]);
      return [result3];
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  // delete a candidate

  async deleteCandidate(candidateID) {
    const deleteQuery1 = "DELETE FROM address WHERE candidate_ID = ?";
    const deleteQuery2 = "DELETE FROM candidate WHERE ID = ?";
    const deleteQuery3 = "DELETE FROM auth WHERE auth_ID = ?";

    try {
      // Assume you have candidateID from somewhere.
      const authIDQuery = "SELECT auth_ID FROM candidate WHERE ID = ?";
      const [authIDResult] = await this.database.query(authIDQuery, [
        candidateID,
      ]);

      if (authIDResult.length === 0) {
        // Candidat non trouvé
        throw new Error("Le candidat n'existe pas dans la base de données.");
      }

      const authID = authIDResult[0].auth_ID;

      await this.database.query(deleteQuery1, [candidateID]);
      await this.database.query(deleteQuery2, [candidateID]);
      await this.database.query(deleteQuery3, [authID]);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

module.exports = CandidateManager;
