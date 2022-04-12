var express = require('express');
var router = express.Router();
const userService = require('../src/user/userService');

router.get('/', function(req, res, next) {
  if (req.session?.store?.loggedIn) return res.redirect('/home');
  return res.render('login', { title: 'Login' });
});

router.post('/', async function(req, res, next) {
  try {
    const user = await userService.login(req.body.username, req.body.password);
    if (!user) return res.render('login', {error: 'Usuario o contraseña incorrectos.'});

    req.session.store = {
      loggedIn: Boolean(user),
      user: user,
    }
    
    return res.redirect('/home');
  } catch (error) {
    if (error) return res.render('login', {error : error.message || error});
  }
});

module.exports = router;
