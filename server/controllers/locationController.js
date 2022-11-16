const { Location } = require("../models/models")
const { ApiError } = require("../errors/ApiError")

class locationController {
    async create(req, res) {
        const { name } = req.body
        const location = await Location.create({ name })
        return res.json({ location })
    }

    async getAll(req, res) {
        const locations = await Location.findAll()
        return res.json(locations)
    }
}

module.exports = new locationController()
