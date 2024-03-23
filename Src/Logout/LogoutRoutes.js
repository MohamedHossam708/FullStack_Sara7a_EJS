import express from "express"
import { logoutController } from "./LogoutController.js"

const logoutRouter=express.Router()



logoutRouter.get("/logout",logoutController)





export default logoutRouter