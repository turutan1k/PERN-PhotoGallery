const { View } = require("../models/models")
const { ApiError } = require("../errors/ApiError")

class viewController {
    async create(req, res) {
        const { name } = req.body
        const view = await View.create({ name })
        return res.json({ view })
    }

    async getAll(req, res) {
        const views = await View.findAll()
        return res.json(views)
    }
}

module.exports = new viewController()
