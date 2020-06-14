const path = require('path');
const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

router.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', 'not-found.html'));
});

module.exports = router;