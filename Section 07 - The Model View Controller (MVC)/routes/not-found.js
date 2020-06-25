const path = require("path");
const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

router.use("/", (req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

module.exports = router;
