var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if (!req.session?.store?.loggedIn) return res.redirect('/login');
  return res.render('home', {title: 'Home', user: req.session?.store?.user});
});

module.exports = router;