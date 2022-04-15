var express = require('express');
var router = express.Router();
const userService = require('../src/user/userService');

router.get('/', function(req, res, next) {
  return res.render('contacto', { title: 'Contacto' , loggedIn: req.session?.store?.loggedIn });
});

module.exports = router;