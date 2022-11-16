const Router = require("express")
const router = new Router()
const photoController = require("../controllers/photoController")
const checkRole = require("../middleware/checkRoleMiddleware")

router.post("/", checkRole("ADMIN"), photoController.create)
router.get("/", photoController.getAll)
router.get("/:id", photoController.getOne)

module.exports = router
