var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  return res.render('novedades', { title: 'Novedades', loggedIn: req.session?.store?.loggedIn });
});

module.exports = router;