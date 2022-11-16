const Router = require("express")
const router = new Router()
const locationController = require("../controllers/locationController")
const checkRole = require("../middleware/checkRoleMiddleware")

router.post("/", checkRole("ADMIN"), locationController.create)
router.get("/", locationController.getAll)

module.exports = router
