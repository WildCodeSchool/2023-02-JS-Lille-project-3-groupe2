const AbstractManager = require("./AbstractManager");

class AddressManager extends AbstractManager {
  constructor() {
    super({ table: "address" });
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  findById(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  findByCandidateId(id) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE candidate_ID = ?`,
      [id]
    );
  }

  update(address) {
    return this.database.query(
      `
      UPDATE ${this.table} SET street_number = ?, street_type = ?, street_name = ?, city = ?, postal_code = ?, department = ?, region = ?, country = ? WHERE id = ?`,
      [
        address.street_number,
        address.street_type,
        address.street_name,
        address.city,
        address.postal_code,
        address.department,
        address.region,
        address.country,
        address.id,
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

module.exports = AddressManager;
