import mongoose, { Types } from "mongoose";




const schema =new mongoose.Schema({
    userId:{type:Types.ObjectId , ref:"user"},
    message:{type:String}

})

 export const MessageModel = mongoose.model("message" , schema)

