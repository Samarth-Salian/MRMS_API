const router = require('express').Router();

const user = require('../controllers/user.controller');

router.get('/search', (req, res) => {

});

router.get('/users', user.findAll);

router.post('/', user.create);

module.exports = router;
