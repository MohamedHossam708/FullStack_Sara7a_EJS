import mongoose from "mongoose";


export function mongoConn(){
    mongoose.connect(process.env.MONGO_CONN).then(()=>{
    console.log("DataBase is Running");
}).catch(err=>{
    console.log('database error', err)
})
 }

