import express from "express"
import {  handelUser, userController } from "./UserController.js"

const userRouter=express.Router()



userRouter.get("/user/:id",userController)


userRouter.post('/handelUser/:id',handelUser)



export default userRouter