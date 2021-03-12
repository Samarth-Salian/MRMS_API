module.exports = {
    ensureAuthenticated: function (req, res, next) {
        console.log(" req "+req.isAuthenticated() + " req.user "+ req.user);
      if (!req.isAuthenticated()) {
        return res.redirect('/login');
      }
      next();   
   
    }
  }