import express from "express"
import { messageController } from "./MessageController.js"

const messageRouter=express.Router()



messageRouter.get("/message",messageController)


export default messageRouter