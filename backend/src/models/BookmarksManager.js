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

  async getBookmarkByCandidateId(candidateId) {
    const query = `SELECT e.social_denomination AS enterprise_title, o.title AS offer_title, b.bookmark_date
FROM bookmarks b
JOIN offer o ON b.offer_ID = o.ID
JOIN enterprise e ON o.enterprise_ID = e.ID
WHERE b.candidate_ID = ?;
`;

    try {
      const [rows] = await this.database.query(query, [candidateId]);
      return rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async add(candidateId, offerId) {
    const query =
      "INSERT INTO bookmarks (candidate_ID, offer_ID, enterprise_ID, bookmark_date) VALUES (?, ?, ?, ?)";
    try {
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
  // link with candidate????

  delete(id) {
    return this.database.query(
      `
      DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
  }
}

module.exports = BookmarksManager;
