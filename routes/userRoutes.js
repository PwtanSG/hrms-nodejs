
const userController = require('../controllers/userController');
const router = require('express').Router();

router.get('/', function (req, res) {
    res.send('Hello World1')
})
// router.get('/users', userController);

module.exports = router;