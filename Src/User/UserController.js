import { userModel } from "../../DataBase/Modules/UserModel.js"
import { MessageModel } from "../../DataBase/Modules/messageModel.js"





export const userController = async(req,res)=>{

 const user= await userModel.findById(req.params.id)
  

    res.render("user.ejs",{session:undefined , userId:req.params.id , userName:user.name})
}

export const handelUser=async(req,res)=>{

    await MessageModel.insertMany({userId:req.params.id , message:req.body.message})

    res.redirect(`/user/${req.params.id}`)

}