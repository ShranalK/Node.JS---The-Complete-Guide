const express = require("express");

const router = express.Router();
const indexData = require("./index");

router.get("/users", (req, res, next) => {
  res.render("user", {
    pageTitle: "Users",
    users: indexData.users,
  });
});

exports.routes = router;
