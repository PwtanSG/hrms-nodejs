const employeeController = require('../controllers/employeeController');
const router = require("express").Router();

router.get('/', (req, res) => {
    res.send("employee routes")
})

router.get('/all', (req, res) => {
    res.status(200).send("get employees")
})

module.exports = router;