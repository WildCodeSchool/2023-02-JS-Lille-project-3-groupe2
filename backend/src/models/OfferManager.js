const AbstractManager = require("./AbstractManager");

class OfferManager extends AbstractManager {
  constructor() {
    super({ table: "offer" });
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  findByTitle(title) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE title = ?`, [
      title,
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
}

module.exports = OfferManager;
