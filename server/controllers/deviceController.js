const { Device } = require("../models/models")
const { ApiError } = require("../errors/ApiError")

class deviceController {
    async create(req, res) {
        const { name } = req.body
        const device = await Device.create({ name })
        return res.json({ device })
    }

    async getAll(req, res) {
        const devices = await Device.findAll()
        return res.json(devices)
    }
}

module.exports = new deviceController()
