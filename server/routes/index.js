const Router = require("express")
const router = new Router()

const photoRouter = require("./photoRouter")
const viewRouter = require("./viewRouter")
const deviceRouter = require("./deviceRouter")
const locationRouter = require("./locationRouter")
const colorRouter = require("./colorRouter")
const qualityRouter = require("./qualityRouter")
const descriptionRouter = require("./descriptionRouter")
const userRouter = require("./userRouter")

router.use("/photo", photoRouter),
    router.use("/view", viewRouter),
    router.use("/device", deviceRouter),
    router.use("/location", locationRouter),
    router.use("/color", colorRouter),
    router.use("/quality", qualityRouter),
    router.use("/description", descriptionRouter),
    router.use("/user", userRouter),
    (module.exports = router)
