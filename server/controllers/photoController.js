const uuid = require("uuid")
const path = require("path")
const { Photo } = require("../models/models")
const ApiError = require("../errors/ApiError")

class photoController {
    async create(req, res, next) {
        try {
            const { postDate, viewId, locationId, deviceId, colorId, qualityId, descriptionId } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, "..", "static", fileName))

            const photo = await Photo.create({
                postDate,
                viewId,
                locationId,
                deviceId,
                colorId,
                qualityId,
                descriptionId,
                img: fileName,
            })

            return res.json({ photo })
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let { viewId, locationId, limit, page } = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let photos
        if (!viewId && !locationId) {
            photos = await Photo.findAndCountAll({ limit, offset })
        }
        if (viewId && !locationId) {
            photos = await Photo.findAndCountAll({
                where: { viewId },
                limit,
                offset,
            })
        }
        if (!viewId && locationId) {
            photos = await Photo.findAndCountAll({
                where: { locationId },
                limit,
                offset,
            })
        }
        if (viewId && locationId) {
            photos = await Photo.findAndCountAll({
                where: { viewId, locationId },
                limit,
                offset,
            })
        }
        return res.json(photos)
    }

    async getOne(req, res) {
        const { id } = req.params
        const photo = await Photo.findOne({ where: { id } })
        return res.json(photo)
    }
}

module.exports = new photoController()
