const getEmployees = async (req, res) => {
    res.status(200).send("get employee");
}

module.exports = {
    getEmployees,
}