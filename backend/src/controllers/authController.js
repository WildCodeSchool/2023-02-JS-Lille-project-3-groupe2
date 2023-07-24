const models = require("../models");

const browse = (req, res) => {
  models.auth
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
  models.auth
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

const edit = (req, res) => {
  const auth = req.body;

  auth.id = parseInt(req.params.id, 10);

  models.auth
    .update(auth)
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
  const auth = req.body;
  auth.id = parseInt(req.params.id, 10);

  models.auth
    .delete(auth)
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

const getUserByEmailWithPasswordAndPassToNext = async (req, res, next) => {
  console.log("ok");

  const { email } = req.body;
  try {
    const [account] = await models.auth.getAccountByEmail(email);
    if (account[0] == null) {
      res.sendStatus(404);
    } else {
      [req.user] = account;
      next();
    }
  } catch (error) {
    res.status(500).send("Error retrieving data from database");
  }
};

module.exports = {
  browse,
  read,
  edit,
  destroy,
  getUserByEmailWithPasswordAndPassToNext,
};
