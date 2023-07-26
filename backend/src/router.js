const express = require("express");
const fs = require("fs");

const router = express.Router();

const multer = require("multer");

const { v4: uuidv4 } = require("uuid");

const upload = multer({ dest: "./public/uploads/" });

const offerControllers = require("./controllers/offerControllers");
const candidateControllers = require("./controllers/candidateControllers");
// const ValidateUser = require("./services/ValidateUser");
const hashedCandidatePassword = require("./services/hashedCandidatePassword");
const authController = require("./controllers/authController");
const bookmarksControllers = require("./controllers/bookmarksControllers");
const enterpriseControllers = require("./controllers/enterpriseControllers");
const candidacyControllers = require("./controllers/candidacyControllers");

router.get("/auth/:id", authController.read);
router.get("/offer", offerControllers.browse);
router.get("/offer/:id", offerControllers.read);
router.get("/candidate/:id/candidacy", candidacyControllers.read);
router.get("/candidate/:id/bookmarks", bookmarksControllers.read);
router.get("/candidate", candidateControllers.browse);
router.get("/candidate/:id", candidateControllers.read);
router.put("/offer/:id", offerControllers.edit);
router.put("/candidate/:id/candidacy", candidacyControllers.edit);
router.post("/candidate/bookmarks", bookmarksControllers.create);
router.post("/candidate/:id/candicacy", candidacyControllers.create);
router.delete("/candidate/:id/bookmarks", bookmarksControllers.destroy);
router.put(
  "/candidate/:id",
  hashedCandidatePassword.hashCandidatePassword,
  candidateControllers.edit
);
router.get("/enterprise", enterpriseControllers.browse);

router.delete("/candidate/:id", candidateControllers.destroy);

router.put(
  "/candidate/:id",
  // hashedCandidatePassword,
  candidateControllers.edit
);

router.post(
  "/register",
  // ValidateUser.ValidateUser,
  // multer,
  hashedCandidatePassword.hashCandidatePassword,
  candidateControllers.create
);

/// route pour la photo de profile
router.put(
  "/candidate/:id/picture_url",
  upload.single("picture_url"),
  (req, res) => {
    const { originalname } = req.file;
    const { filename } = req.file;
    const newName = `${uuidv4()}-${originalname}`;
    fs.rename(
      `./public/uploads/${filename}`,
      `./public/uploads/${newName}`,
      (err) => {
        if (err) throw err;
        res.send("File uploaded");
      }
    );
  }
);

// route pour la uplaod le CV

router.post("/candidacy/cv_url", upload.single("cv_url"), (req, res) => {
  const { originalname } = req.file;

  const { filename } = req.file;

  fs.rename(
    `./public/uploads/${filename}`,
    `./public/uploads/${uuidv4()}-${originalname}`,
    (err) => {
      if (err) throw err;
      res.send("File uploaded");
    }
  );
});

// route pour la uplaod la lettre de motivation
router.post(
  "/candidacy/motivation_letter_url",
  upload.single("motivation_letter_url"),
  (req, res) => {
    const { originalname } = req.file;
    const { filename } = req.file;

    fs.rename(
      `./public/uploads/${filename}`,
      `./public/uploads/${uuidv4()}-${originalname}`,
      (err) => {
        if (err) throw err;
        res.send("File uploaded");
      }
    );
  }
);

router.post(
  "/login",
  hashedCandidatePassword.verifyToken,
  authController.getUserByEmailWithPasswordAndPassToNext,
  hashedCandidatePassword.verifyPassword,
  hashedCandidatePassword.sendToken
);

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

module.exports = router;
