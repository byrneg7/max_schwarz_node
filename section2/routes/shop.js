const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

// get/post etc. = exact matching. app.use = inexact matching. 
router.get('/', (req, res, next) => {
  // __dirname points to the absolute path of the current file on our system
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;