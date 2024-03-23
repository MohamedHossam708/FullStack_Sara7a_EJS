import { userModel } from "../../DataBase/Modules/UserModel.js"
import bcrypt from 'bcrypt'




export const loginController = (req,res)=>{


    res.render("login.ejs",{error:req.query?.error  ,session:undefined})
}


export const handleLogin=async(req,res)=>{

 let user = await userModel.findOne({email:req.body.email})
if (!user)return res.redirect("/login?error=invalid email or password")
  
let match=await bcrypt.compare(req.body.password,user.password)
console.log(match)
if (!match) return res.redirect("/login?error=invalid email or password")



req.session.isLoggedIn = true
req.session.userId = user._id
req.session.name = user.name

 res.redirect("/message")

}