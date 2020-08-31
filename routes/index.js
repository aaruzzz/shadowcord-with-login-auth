const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
// router.get('/dashboard', ensureAuthenticated, (req, res) =>
//   res.render('dashboard', {
//     user: req.user
//   })
// );


router.get('/dashboard', ensureAuthenticated, (req, res) => {
  // console.log(__dirname);
  // res.sendFile(`../content/public/index.html`);
});


module.exports = router