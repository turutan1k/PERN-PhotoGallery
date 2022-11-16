const Router = require("express")
const router = new Router()
const descriptionController = require("../controllers/descriptionController")
const checkRole = require("../middleware/checkRoleMiddleware")

router.post("/", checkRole("ADMIN"), descriptionController.create)
router.get("/", descriptionController.getAll)

module.exports = router
