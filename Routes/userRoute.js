const express = require("express")
const userController = require("../controllers/userController")
const userRouter = express()

userRouter.post("/create",userController.createUser)

module.exports = userRouter