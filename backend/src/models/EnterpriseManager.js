const AbstractManager = require("./AbstractManager");

class EnterpriseManager extends AbstractManager {
  constructor() {
    super({ table: "enterprise" });
  }

  findAllWithAdress() {
    return this.database
      .query(`SELECT e.ID, e.siret, e.social_denomination, e.trade_name, e.contact_email, e.phone_number, e.company_type, e.other_information, e.kbis_url, e.logo_url, e.website,
    a.ID AS address_ID, a.street_number, a.street_type, a.street_name, a.city, a.postal_code, a.department, a.region, a.country
FROM enterprise e
JOIN address a ON e.ID = a.enterprise_ID;

  `);
  }

  find(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }
  // update entreprise avec son adresse.

  update(enterprise) {
    return this.database.query(
      `UPDATE enterprise e
      JOIN address a ON e.ID = a.enterprise_ID
      SET e.siret = ?, e.social_denomination = ?, e.trade_name = ?, e.contact_email = ?,
          e.phone_number = ?, e.company_type = ?, e.other_information = ?, e.kbis_url = ?,
          e.logo_url = ?, e.website = ?,
          a.street_number = ?, a.street_type = ?, a.street_name = ?, a.city = ?,
          a.postal_code = ?, a.department = ?, a.region = ?, a.country = ?
      WHERE e.ID = ?;
      `,
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
        enterprise.address.street_number,
        enterprise.address.street_type,
        enterprise.address.street_name,
        enterprise.address.city,
        enterprise.address.postal_code,
        enterprise.address.department,
        enterprise.address.region,
        enterprise.address.country,
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
