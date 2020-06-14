const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

// GET /admin/add-product
router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'home.html'))
});

router.get('/diary', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'diary.html'))
});

module.exports = router;