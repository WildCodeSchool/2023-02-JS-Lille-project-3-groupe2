const models = require("../models");

const browse = (req, res) => {
  models.bookmarks
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.bookmarks
    .getBookmarkByCandidateId(req.params.id)

    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const bookmarks = req.body;

  bookmarks.id = parseInt(req.params.id, 10);

  models.bookmarks
    .update(bookmarks)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.send(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const create = (req, res) => {
  const bookmarks = req.body;
  models.bookmarks
    .add(bookmarks)

    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(500);
      } else {
        res.status(200).send("bookmark created");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  const bookmarks = req.body;
  bookmarks.id = parseInt(req.params.id, 10);

  models.bookmarks
    .delete(bookmarks)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.send(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  create,
  edit,
  destroy,
};
