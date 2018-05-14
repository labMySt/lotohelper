const express = require('express');
const router = express.Router();
const passport = require("passport");

passport.serializeUser(function (user, done) {
  //save in session only user id
  done(null, {id: user.id});
});

passport.deserializeUser(function (user, done) {
  // find restore user from session by id
  User.findById(user.id)
    .then(user => {
      done(null, user)
    })
    .catch(done);
});

router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });
