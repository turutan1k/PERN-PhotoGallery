const Router = require("express")
const router = new Router()
const viewController = require("../controllers/viewController")
const checkRole = require("../middleware/checkRoleMiddleware")

router.post("/", checkRole("ADMIN"), viewController.create)
router.get("/", viewController.getAll)

module.exports = router
