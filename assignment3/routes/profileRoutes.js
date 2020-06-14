const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

// GET /admin/add-product
router.get('/profile', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'profile.html'))
});

module.exports = router;