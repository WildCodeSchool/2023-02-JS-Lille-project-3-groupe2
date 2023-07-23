const models = require("../models");

const browse = (req, res) => {
  models.candidate
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
  models.candidate
    .find(req.params.id)

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

const create = (req, res) => {
  const candidate = req.body;
  models.candidate
    .add(candidate)

    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(500);
      } else {
        res.status(200).send("Account created");
      }
    })
    .catch((err) => {
      if (err.code === "ER_DUP_ENTRY") {
        res.status(409).send("Account already exist");
      } else {
        res.sendStatus(500);
      }
    });
};

const edit = (req, res) => {
  const candidate = req.body;
  candidate.id = parseInt(req.params.id, 10);
  models.candidate
    .updateCandidate(candidate)
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

const getAllMyBookmarks = (req, res) => {
  models.candidate
    .getBookmarks(req.params.id)
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

const destroy = (req, res) => {
  const candidate = parseInt(req.params.id, 10);

  models.candidate
    .deleteCandidate(candidate)
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
  edit,
  create,
  destroy,
  getAllMyBookmarks,
};
