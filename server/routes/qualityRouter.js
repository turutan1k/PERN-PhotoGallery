const Router = require("express")
const router = new Router()
const qualityController = require("../controllers/qualityController")
const checkRole = require("../middleware/checkRoleMiddleware")

router.post("/", checkRole("ADMIN"), qualityController.create)
router.get("/", qualityController.getAll)

module.exports = router
