import { userModel } from "../../DataBase/Modules/UserModel.js"
import { signUpValidation } from "../User/UserValiditaion.js"
import bcrypt from 'bcrypt'




export const registerController = (req,res)=>{

    res.render("register.ejs",{error:req.query?.error , session:undefined ,flashError:req.flash('info')})
}


export const handelRegister =async(req,res)=>{
    const { name , email , password}= req.body
    let {error} = signUpValidation.validate(req.body,{abortEarly:false})

    if(!error?.details){
    let isExisted=await userModel.findOne({email:req.body.email})
    if(isExisted) return res.redirect("/register?error=user already existed")
    let hashedPassword = bcrypt.hashSync(password,8)
    await userModel.create({
        name,
        email,
        password:hashedPassword
    })
    return res.redirect("/login")

}

    req.flash("info", error.details)
    res.redirect("/register")
}