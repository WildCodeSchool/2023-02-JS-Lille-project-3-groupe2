const express = require("express");

const router = express.Router();

const offerControllers = require("./controllers/offerControllers");
const candidateControllers = require("./controllers/candidateControllers");
const ValidateUser = require("./services/ValidateUser");
const hashedCandidatePassword = require("./services/hashedCandidatePassword");

router.get("/offer", offerControllers.browse);
router.get("/offer/:id", offerControllers.read);
router.get("/candidate", candidateControllers.browse);
router.get("/candidate/:id", candidateControllers.read);
router.get("/candidate/:id", candidateControllers.getAllMyBookmarks);
router.get("/offer", offerControllers.selectOfferByDateOrCity);
router.put("/offer/:id", offerControllers.edit);
/* router.put(
  "/candidate/:id",
  hashedCandidatePassword,
  candidateControllers.edit
); */

router.post(
  "/candidate",
  ValidateUser.ValidateUser,
  hashedCandidatePassword.hashCandidatePassword,
  candidateControllers.create
);

module.exports = router;
