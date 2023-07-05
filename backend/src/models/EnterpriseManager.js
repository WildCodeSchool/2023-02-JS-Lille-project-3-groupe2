const AbstractManager = require("./AbstractManager");

class EnterpriseManager extends AbstractManager {
  constructor() {
    super({ table: "enterprise" });
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  find(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  update(enterprise) {
    return this.database.query(
      `
      UPDATE ${this.table} SET siret = ?, social_denomination = ?, trade_name = ?, contact_email = ?, phone_number = ?, company_type = ?, other_information = ?, kbis_url = ?, logo_url = ?, website = ? WHERE id = ?`,
      [
        enterprise.siret,
        enterprise.social_denomination,
        enterprise.trade_name,
        enterprise.contact_email,
        enterprise.phone_number,
        enterprise.company_type,
        enterprise.other_information,
        enterprise.kbis_url,
        enterprise.logo_url,
        enterprise.website,
        enterprise.id,
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

module.exports = EnterpriseManager;
