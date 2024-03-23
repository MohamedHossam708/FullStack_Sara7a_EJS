import express from "express"
import { homeController } from "./HomeController.js"

const homeRouter=express.Router()



homeRouter.get("/",homeController)


export default homeRouter