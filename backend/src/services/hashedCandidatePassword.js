const argon2 = require("@node-rs/argon2");
const jwt = require("jsonwebtoken");
const models = require("../models");

const hashCandidatePassword = async (req, res, next) => {
  const { password } = req.body;
  try {
    if (password) {
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
    }
    next();
  } catch (error) {
    res.status(500).json({ error: "Failed to hash candidate password" });
  }
};

const verifyPassword = async (req, res, next) => {
  try {
    const isVerified = await argon2.verify(
      req.user.password,
      req.body.password
    );
    if (isVerified) {
      delete req.body.password;
      delete req.user.password;
      if (req.user.account_type.toLowerCase() === "candidat") {
        const [[candidate]] = await models.candidate.findCandidateByAccountId(
          req.user.ID
        );
        const [[address]] = await models.address.findByCandidateId(
          candidate.ID
        );

        if (candidate == null || address == null) {
          res.sendStatus(404);
        } else {
          req.userInfos = candidate;
          req.userAddress = address;
          /* res.json({ user: req.user, account: candidate }); */
          next();
        }
      } else if (req.user.account_type.toLowerCase() === "entreprise") {
        const [enterprise] = await models.enterprise.findEnterpriseByAccountId(
          req.user.ID
        );
        if (enterprise[0] == null) {
          res.sendStatus(404);
        } else {
          /* res.json({ user: req.user, account: enterprise }); */
          next();
        }
      } else if (req.user.account_type.toLowerCase() === "staff") {
        const [staff] = await models.staff.findStaffByAccountId(req.user.ID);
        if (staff[0] == null) {
          res.sendStatus(404);
        } else {
          /* res.json({ user: req.user, account: staff }); */
          next();
        }
      }
    } else {
      res.status(401).send("Mauvais mot de passe");
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
const verifyToken = async (req, res, next) => {
  try {
    if (req.cookies) {
      const token = await jwt.verify(req.cookies.token, process.env.JWT_SECRET);
      if (token.role === "candidat") {
        const [[user]] = await models.candidate.findCandidateByAccountId(
          token.account_ID
        );
        const [[address]] = await models.address.findByCandidateId(user.ID);
        res.json({ userAuth: token, userInfos: user, userAddress: address });
      } else if (token.role === "entreprise") {
        const [user] = await models.enterprise.findEnterpriseByAccountId(
          token.account_ID
        );
        res.json([user]);
      } else if (token.role === "staff") {
        const [user] = await models.staff.findStaffByAccountId(
          token.account_ID
        );
        res.json([user]);
      }
    } else {
      next();
    }
  } catch (err) {
    if (
      err.name === "JsonWebTokenError" &&
      err.message === "jwt must be provided"
    ) {
      // Token is missing or invalid, move to the next middleware
      next();
    } else {
      // Pass other errors to the error handling middleware
      next(err);
    }
  }
};

const sendToken = async (req, res) => {
  try {
    const token = await jwt.sign(
      {
        account_ID: req.userInfos.auth_ID,
        user_ID: req.userInfos.ID,
        role: req.user.account_type,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "120min",
      }
    );
    res.cookie("token", token, {
      maxAge: 120 * 60 * 1000,
      httpOnly: true,
    });

    res.json({
      userInfos: req.userInfos,
      userAuth: req.user,
      userAddress: req.userAddress,
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = {
  hashCandidatePassword,
  verifyPassword,
  sendToken,
  verifyToken,
};
