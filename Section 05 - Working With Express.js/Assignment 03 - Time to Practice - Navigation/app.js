const express = require('express');
const path = require('path');

const app = express();

const adminRoute = require('./routes/admin');
const userRoute = require('./routes/users');

app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoute);
app.use(userRoute);

app.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
