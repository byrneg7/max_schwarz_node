const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
  res.render(
    'index', {
    pageTitle: 'Add User',
    path: '/',
  });
});

// /admin/add-product => POST
router.post('/users', (req, res, next) => {
  const { user } = req.body
  users.push({ user });
  res.redirect('/users');
});

router.get('/users', (req, res, next) => {
  console.log(users)
  res.render(
    'users', {
    users,
    pageTitle: 'Users',
    path: '/users',
  });
});

exports.router = router;
