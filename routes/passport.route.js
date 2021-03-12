const router = require('express').Router();

var passport = require("passport");

router.get('/google',
  passport.authenticate('google', { scope: ["profile", "email"]})
);

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    //res.send(req.user);
    res.redirect(`http://localhost:3000/dashboard`);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.send(req.user);
});

module.exports = router;
