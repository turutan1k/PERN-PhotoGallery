const { Description } = require("../models/models")
const { ApiError } = require("../errors/ApiError")

class descriptionController {
    async create(req, res) {
        const { name } = req.body
        const description = await Description.create({ name })
        return res.json({ description })
    }

    async getAll(req, res) {
        const descriptions = await Description.findAll()
        return res.json(descriptions)
    }
}

module.exports = new descriptionController()
