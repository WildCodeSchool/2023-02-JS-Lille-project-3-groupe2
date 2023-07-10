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

module.exports = { hashCandidatePassword };
