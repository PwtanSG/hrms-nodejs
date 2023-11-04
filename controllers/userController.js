const getUsers = async (req, res) => {
    // const categories = await Category.findAll({})
    res.status(200).send("get users")
}

module.exports = {
    getUsers
}