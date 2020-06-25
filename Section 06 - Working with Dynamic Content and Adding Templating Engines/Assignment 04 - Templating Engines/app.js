const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const indexRoute = require('./routes/index');
const usersRoute = require('./routes/users');

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(indexRoute.routes);
app.use(usersRoute.routes);

app.listen(3000);