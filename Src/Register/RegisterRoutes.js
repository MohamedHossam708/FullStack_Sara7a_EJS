import express from "express"
import { handelRegister, registerController } from "./RegisterController.js"

const registerRouter=express.Router()



registerRouter.get("/register",registerController)


registerRouter.post("/handelRegister",handelRegister)

export default registerRouter