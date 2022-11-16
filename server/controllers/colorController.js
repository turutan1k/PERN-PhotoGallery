const { Color } = require("../models/models")
const { ApiError } = require("../errors/ApiError")

class colorController {
    async create(req, res) {
        const { name } = req.body
        const color = await Color.create({ name })
        return res.json({ color })
    }

    async getAll(req, res) {
        const colors = await Color.findAll()
        return res.json(colors)
    }
}

module.exports = new colorController()
