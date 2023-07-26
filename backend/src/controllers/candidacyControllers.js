const models = require("../models");

const browse = (req, res) => {
  models.candidacy
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
  models.candidacy
    .getCandidaciesByCandidateId(req.params.id)
    .then((rows) => {
      if (rows.length === 0) {
        res.sendStatus(404);
      } else {
        res.send(rows); // Renvoie toutes les candidatures associées au candidat
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const create = (req, res) => {
  const candidacy = req.body;
  candidacy.id = parseInt(req.params.id, 10);
  models.candidacy
    .createCandidacy()
    .then(([result]) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const candidacy = req.body;

  candidacy.id = parseInt(req.params.id, 10);

  models.candidacy
    .updateCandidacy(candidacy)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.send(result).status(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  const candidacy = req.body;
  candidacy.id = parseInt(req.params.id, 10);

  models.candidacy
    .delete(candidacy)
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
