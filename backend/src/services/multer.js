// multer pour gérer les upload de fichier.

// importation de multer.
const multer = require("multer");

// le dictionnaire de MIME TYPES
const MIME_TYPES = {
  "image/jpg": ".jpg",
  "image/jpeg": ".jpeg",
  "image/gif": ".gif",
  "application/pdf": ".pdf",
  "image/png": ".png",
};

// la destination du fichier(reportoire) et générer un nom de fichier unique
const storage = multer.diskStorage({
  // la destination de stockage du fichier.
  destination: (req, file, callback) => {
    callback(null, "../public/uploads");
  },
  filename: (req, file, callback) => {
    // supprimer les espaces dans le nom du fichier.
    const name = file.originalname.split(" ").join("_");
    const extention = MIME_TYPES[file.mimetype];

    callback(null, `${name}_${Date.now()}${extention}`);
  },
});

// export multer
module.exports = multer({ storage }).multiple("image", "application");
