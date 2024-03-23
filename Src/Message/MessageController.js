import { MessageModel } from "../../DataBase/Modules/messageModel.js";





export const messageController =async (req,res)=>{


if(!req.session.isLoggedIn) return res.redirect("/login")
let fullUrl = req.protocol + '://' + req.get('host') + "/user/" + req.session.userId;

let messages = await MessageModel.find({userId:req.session.userId})
    res.render("message.ejs",{session:req.session , fullUrl , messages})
}


