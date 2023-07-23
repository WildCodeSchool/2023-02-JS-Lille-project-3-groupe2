const AbstractManager = require("./AbstractManager");

class OfferManager extends AbstractManager {
  constructor() {
    super({ table: "offer" });
  }

  findAll() {
    return this.database.query(`SELECT
    o.ID,
    o.enterprise_ID,
    e.siret,
    e.social_denomination,
    e.trade_name,
    e.contact_email AS enterprise_contact_email,
    e.phone_number AS enterprise_phone_number,
    e.company_type,
    e.other_information,
    e.kbis_url,
    e.logo_url,
    e.website,
    o.title,
    o.min_salary,
    o.max_salary,
    o.descriptions,
    o.visibility,
    o.offer_date,
    a.street_number,
    a.street_type,
    a.street_name,
    a.city,
    a.postal_code,
    a.department,
    a.region,
    a.country
  FROM
    externatic.offer AS o
  JOIN
    externatic.enterprise AS e ON o.enterprise_ID = e.ID
  JOIN
    externatic.address AS a ON o.ID = a.offer_ID;
  
  `);
  }

  findByTitle(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  update(offer) {
    return this.database.query(
      `
      UPDATE ${this.table} SET title = ?, salaire_min = ?, salaire_max = ?, description = ?, visibilite = ?, date_offer = ? WHERE id = ?`,
      [
        offer.title,
        offer.salaire_min,
        offer.salaire_max,
        offer.description,
        offer.visibilite,
        offer.date_offer,
        offer.id,
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

  async selectOffersByDateOrCity(date, city) {
    try {
      await this.database.beginTransaction();

      const query = `
        SELECT *
        FROM ${this.table}
        INNER JOIN address ON offer.address_ID = address.ID
        WHERE offer.offer_date >= ? OR address.city = ?
        ORDER BY offer.offer_date DESC`;

      const result = await this.database.query(query, [date, city]);

      await this.database.commit();

      return result;
    } catch (error) {
      await this.database.rollback();
      throw error;
    }
  }
}

module.exports = OfferManager;
