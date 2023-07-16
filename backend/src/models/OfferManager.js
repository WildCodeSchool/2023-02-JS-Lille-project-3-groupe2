const AbstractManager = require("./AbstractManager");

class OfferManager extends AbstractManager {
  constructor() {
    super({ table: "offer" });
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
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
