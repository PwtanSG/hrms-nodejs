
const userController = require('../controllers/userController');
const router = require('express').Router();

router.get('/', function (req, res) {
    res.send('users World1')
})

router.get('/all', userController.getUsers);

module.exports = router;