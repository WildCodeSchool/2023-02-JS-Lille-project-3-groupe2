const express = require("express");

const router = express.Router();

const offerControllers = require("./controllers/offerControllers");
const candidateControllers = require("./controllers/candidateControllers");
const ValidateUser = require("./services/ValidateUser");
const hashedCandidatePassword = require("./services/hashedCandidatePassword");
const authController = require("./controllers/authController");
const bookmarksController = require("./controllers/bookmarksControllers");

router.get("/offer", offerControllers.browse);
router.get("/offer/:id", offerControllers.read);
router.put("/offer/:id", offerControllers.edit);
router.get("/candidate", candidateControllers.browse);
router.get("/candidate/:id", candidateControllers.read);
router.get("/candidate/:id/bookmarks", candidateControllers.getAllMyBookmarks);
router.post("candidate/:id/bookmarks", bookmarksController.create);
router.delete("candidate/:id/bookmarks", bookmarksController.destroy);
/* router.put(
  "/candidate/:id",
  hashedCandidatePassword,
  candidateControllers.edit
); */

router.post(
  "/register",
  ValidateUser.ValidateUser,
  hashedCandidatePassword.hashCandidatePassword,
  candidateControllers.create
);

router.post(
  "/login",
  authController.getUserByEmailWithPasswordAndPassToNext,
  hashedCandidatePassword.verifyPassword,
  hashedCandidatePassword.sendToken
);

router.get("/show-token", (req, res) => {
  console.info(req.cookies);

  res.sendStatus(200);
});
router.get("/logout", (req, res) => {
  res.clearCookie("token");

  res.sendStatus(204);
});

module.exports = router;
