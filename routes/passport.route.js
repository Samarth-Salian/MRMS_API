const router = require('express').Router();
var jwt = require('jsonwebtoken');
var passport = require("passport");

router.get('/google',
  passport.authenticate('google', { scope: ["profile", "email"] })
);

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login', session: false }),
  function (req, res) {
    // Successful authentication, send token

    const token = jwt.sign(
      {
        emailId: req.user.emailId,
        id: req.user._id
      },
      process.env.JWT_KEY,
      {
        expiresIn: "12h"
      }
    );


    console.log(" inside call back token : " + token)

    res.send({
      'message': 'login success',
      'token': token
    })

  });

router.get("/logout", (req, res) => {
  req.logout();
  res.send(req.user);
});

module.exports = router;
