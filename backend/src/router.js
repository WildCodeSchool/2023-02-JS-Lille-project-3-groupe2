const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const offerControllers = require("./controllers/offerControllers");
const candidateControllers = require("./controllers/candidateControllers");
const { ValidateUser } = require("./services/ValidateUser");

router.get("/offer", offerControllers.browse);
router.get("/offer/:intitule", offerControllers.read);
router.get("/candidate", candidateControllers.browse);
router.get("/candidate/:id", candidateControllers.read);
router.get("/candidate/:id", candidateControllers.getAllMyBookmarks);
router.get("/offer", offerControllers.selectOfferByDateOrCity);
router.put("/offer/:id", offerControllers.edit);
router.put("/candidate/:id", candidateControllers.edit);
router.post("/items", itemControllers.add);
router.post("/candidate", ValidateUser, candidateControllers.create);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
