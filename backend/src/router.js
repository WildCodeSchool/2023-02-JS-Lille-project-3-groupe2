const express = require("express");
const fs = require("fs");

const router = express.Router();

const multer = require("multer");

const { v4: uuidv4 } = require("uuid");

const upload = multer({ dest: "./public/uploads/" });

const offerControllers = require("./controllers/offerControllers");
const candidateControllers = require("./controllers/candidateControllers");
const ValidateUser = require("./services/ValidateUser");
const hashedCandidatePassword = require("./services/hashedCandidatePassword");
const authController = require("./controllers/authController");
const bookmarksController = require("./controllers/bookmarksControllers");
const enterpriseControllers = require("./controllers/enterpriseControllers");

router.get("/offer", offerControllers.browse);
router.get("/offer/:id", offerControllers.read);
router.put("/offer/:id", offerControllers.edit);
router.get("/candidate", candidateControllers.browse);
router.get("/candidate/:id", candidateControllers.read);
router.get("/candidate/:id/bookmarks", candidateControllers.getAllMyBookmarks);
router.post("candidate/:id/bookmarks", bookmarksController.create);
router.delete("candidate/:id/bookmarks", bookmarksController.destroy);
router.put(
  "candidate/:id",
  hashedCandidatePassword.hashCandidatePassword,
  candidateControllers.edit
);
router.get("/enterprise", enterpriseControllers.browse);

router.post(
  "/register",
  ValidateUser.ValidateUser,
  hashedCandidatePassword.hashCandidatePassword,
  candidateControllers.create
);

/// route pour la photo de profile
router.post(
  "/candidate/:id/picture_url",
  upload.single("picture_url"),
  (req, res) => {
    // On récupère le nom du fichier original
    const { originalname } = req.file;

    // On récupère le nom du fichier renommé
    const { filename } = req.file;

    // On utilise la fonction rename de fs pour renommer le fichier
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
