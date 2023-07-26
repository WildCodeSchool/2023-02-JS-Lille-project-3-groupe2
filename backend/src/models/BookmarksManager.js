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
      const rows = await this.database.query(query, [candidateId]);
      return rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async add(bookmarData) {
    const query =
      "INSERT INTO bookmarks (candidate_ID, offer_ID, enterprise_ID) VALUES (?, ?, ?)";
    try {
      const result = await this.database.query(query, [
        bookmarData.candidate_ID,
        bookmarData.offer_ID,
        bookmarData.enterprise_ID,
      ]);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async updateBookmark(bookmarkData) {
    const query = `
    UPDATE bookmarks
    SET offer_ID = ?, enterprise_ID = ?, bookmark_date = NOW()
    WHERE candidate_ID = ?;
  `;
    try {
      const result = await this.database.query(query, [
        bookmarkData.offer_ID,
        bookmarkData.enterprise_ID,
        bookmarkData.candidate_ID,
      ]);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async removeBookmark(bookmarData) {
    const query = `
    DELETE FROM bookmarks
    WHERE candidate_ID = ? AND offer_ID = ?;
  `;
    try {
      const result = await this.database.query(query, [
        bookmarData.candidate_ID,
        bookmarData.offer_ID,
      ]);
      return result; // ou vous pouvez retourner un message de succès
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = BookmarksManager;
