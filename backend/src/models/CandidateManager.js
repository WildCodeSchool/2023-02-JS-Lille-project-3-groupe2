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
      "UPDATE candidate SET lastname = ?, firstname = ?, birthdate = ?, phone_number = ?, about = ?, picture_url = ? WHERE ID = ?";
    const updateQuery3 =
      "UPDATE address SET street_number = ?, street_type = ?, street_name = ?, city = ?, postal_code = ?, department = ?, region = ?, country = ? WHERE candidate_ID = ?";
    const updateQuery2 = "UPDATE auth SET password = ? WHERE ID = ?";
    try {
      await this.database.query(updateQuery1, [
        candidate.lastname,
        candidate.firstname,
        candidate.birthdate,
        candidate.phone_number,
        candidate.about,
        candidate.picture_url,
        candidate.id,
      ]);
      if (candidate.hashedPassword && candidate.hashedPassword.length > 0)
        await this.database.query(updateQuery2, [
          candidate.hashedPassword,
          candidate.auth_ID,
        ]);
      const resultTwo = await this.database.query(updateQuery3, [
        candidate.street_number,
        candidate.street_type,
        candidate.street_name,
        candidate.city,
        candidate.postal_code,
        candidate.department,
        candidate.region,
        candidate.country,
        candidate.id,
      ]);

      return resultTwo;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  // get all bookmarks for a candidate

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
    try {
      const authIDQuery = "SELECT auth_ID FROM candidate WHERE ID = ?";
      const [result1] = await this.database.query(authIDQuery, [candidateID]);

      const deleteCandidateQuery = "DELETE FROM candidate WHERE ID = ?";
      const deleteAuthQuery = "DELETE FROM auth WHERE ID = ?";
      await this.database.query(deleteCandidateQuery, [candidateID]);
      const result2 = await this.database.query(deleteAuthQuery, [
        result1[0].auth_ID,
      ]);
      return result2;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

module.exports = CandidateManager;
