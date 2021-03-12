const router = require('express').Router();
const { ensureAuthenticated} = require('../middleware/auth')
const path = require('path');

router.use('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/login.html'));

})
router.use('/dashboard', ensureAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/dashboard.html'));
})

module.exports = router;
