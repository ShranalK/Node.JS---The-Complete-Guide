const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log("This is the users handler");
    res.send('<h1>Users</h1>'
    + '<ul><li>User 1</li><li>User 2</li></ul>');
});

app.use('/', (req, res, next) => {
    console.log('This is the / handler');
    res.send('<h1>Ths is the / handler</h1>');
});

app.listen(3000);