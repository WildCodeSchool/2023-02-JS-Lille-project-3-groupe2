// import some node modules for later

const fs = require("node:fs");
const path = require("node:path");
require("dotenv").config();
const mysql = require("mysql2/promise");

// create express app

const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
app.use(express.json());

// use some application-level middlewares
const database = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

database
  .getConnection()
  .then(() => {
    console.info("Serveur is ok !!!");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());

const cors = require("cors");

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

// import and mount the API routes

const router = require("./router");

app.use(router);

// serve the `backend/public` folder for public resources

app.use(express.static(path.join(__dirname, "../public")));

// serve REACT APP

const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  // serve REACT resources

  app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

  // redirect all requests to the REACT index file

  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// ready to export

module.exports = app;
