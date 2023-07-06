const AbstractManager = require("./AbstractManager");

class BookmarksManager extends AbstractManager {
  constructor() {
    super({ table: "bookmarks" });
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  find(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  async add(candidateId, offerId) {
    try {
      await this.database.beginTransaction();

      const query =
        "INSERT INTO bookmarks (candidate_ID, offer_ID) VALUES (?, ?)";

      await this.database.query(query, [candidateId, offerId]);

      await this.database.commit();
    } catch (error) {
      await this.database.rollback();
      throw error;
    }
  }

  update(bookmarks) {
    return this.database.query(
      `
      UPDATE ${this.table} SET bookmarks_date = ? WHERE id = ?`,
      [bookmarks.bookmarks_date, bookmarks.id]
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

module.exports = BookmarksManager;
