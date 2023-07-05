const AbstractManager = require("./AbstractManager");

class AdressManager extends AbstractManager {
  constructor() {
    super({ table: "adress" });
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  findById(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  update(adress) {
    return this.database.query(
      `
      UPDATE ${this.table} SET street_number = ?, street_type = ?, street_name = ?, city = ?, postal_code = ?, department = ?, region = ?, country = ? WHERE id = ?`,
      [
        adress.street_number,
        adress.street_type,
        adress.street_name,
        adress.city,
        adress.postal_code,
        adress.department,
        adress.region,
        adress.country,
        adress.id,
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

module.exports = AdressManager;
