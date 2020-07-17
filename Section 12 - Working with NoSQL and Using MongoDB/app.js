const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const notFound = require("./routes/not-found");

const mongoConnect = require("./utils/database").mongoConnect;
const user = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById("5f10faa21ba123be773dacee")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
  next();
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(notFound);

mongoConnect(() => {
  app.listen(3000);
});
