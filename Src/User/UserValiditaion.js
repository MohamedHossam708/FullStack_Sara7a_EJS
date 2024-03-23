import Joi from "joi";



export const signUpValidation=Joi.object({
    name:Joi.string().min(2).max(30).required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(5).max(30).required(),
    repassword:Joi.string().valid(Joi.ref("password")).required()
})