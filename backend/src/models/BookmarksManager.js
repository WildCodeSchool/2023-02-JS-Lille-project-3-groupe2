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
