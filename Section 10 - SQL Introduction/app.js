const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const db = require('./utils/database');

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const notFound = require("./routes/not-found");

db.execute('SELECT * FROM products');

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(notFound);

app.listen(3000);
