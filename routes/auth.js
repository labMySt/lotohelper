const express = require('express');
const router = express.Router();
const passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/users');


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

passport.use('local-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
        process.nextTick(function() {
        User.findOne({ 'local.email' :  email }, function(err, user) {
            if (err){
              console.log(err);
                return done(err);
              }
            if (user) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {
                var newUser  = new User();
                newUser.local.email    = email;
                newUser.local.password = newUser.generateHash(password);
                newUser.save(function(err) {
                    if (err){
                      console.log(err);
                      throw err;
                    }

                    return done(null, newUser);
                });
            }
        });
        });
    }));

passport.use('local-login', new LocalStrategy({
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true
        },
        function(req, email, password, done) {
            User.findOne({ 'local.email' :  email }, function(err, user) {
                if (err)
                    return done(err);
                if (!user)
                    return done(null, false, req.flash('loginMessage', 'No user found.'));
                if (!user.validPassword(password))
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
                return done(null, user);
            });
  }));

router.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/user', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
router.post('/login', passport.authenticate('local-login', {
        successRedirect : '/user', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
router.get('/me', (req, res) =>{ console.log(req.user); res.json(req.user)});

router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

module.exports = router;
