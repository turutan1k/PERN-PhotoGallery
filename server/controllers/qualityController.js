const { Quality } = require("../models/models")
const { ApiError } = require("../errors/ApiError")

class qualityController {
    async create(req, res) {
        const { name } = req.body
        const quality = await Quality.create({ name })
        return res.json({ quality })
    }

    async getAll(req, res) {
        const qualities = await Quality.findAll()
        return res.json(qualities)
    }
}

module.exports = new qualityController()
