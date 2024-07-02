const express = require("express");
const router = express.Router();

const userRouter = require("../controller/userController.js")

router.post("/registration", userRouter.userRegister)
router.get("/allget", userRouter.getAllUser)
router.get("/userId",userRouter.getById)

module.exports = router;
