const argon2 = require("@node-rs/argon2");

const hashCandidatePassword = async (req, res, next) => {
  const { password } = req.body;

  try {
    // Hash the candidate's password using Argon2id
    const hashedPassword = await argon2.hash(password, {
      type: argon2.argon2id,
      memoryCost: 2 ** 16,
      timeCost: 5,
      parallelism: 1,
    });

    // Store the hashed password in the request body
    req.body.hashedPassword = hashedPassword;

    // Remove the plain text password from the request body
    delete req.body.password;

    next();
  } catch (error) {
    res.status(500).json({ error: "Failed to hash candidate password" });
  }
};

const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email } = req.body;

  this.database
    .query("select * from auth where email = ?", [email])
    // user [password, email, candidate_ID, enterprise_ID, staff_ID, ID]
    .then(([users]) => {
      if (users[0] != null) {
        [req.user] = users;

        // for this [req.user] = users, needed to do this by eslint

        next();
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const verifyPassword = (req, res) => {
  argon2
    .verify(req.user.password, req.body.password)
    .then((isVerified) => {
      if (isVerified) {
        this.database
          .query("select * from candidate where id = ?", [
            req.user.candidate_ID,
          ])
          .then((result) => {
            res.json(result);
          })
          .catch((err) => {
            console.error(err);
            res.status(500).send("Error retrieving data from database");
          });
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  hashCandidatePassword,
  getUserByEmailWithPasswordAndPassToNext,
  verifyPassword,
};
