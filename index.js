import express from 'express'
import { mongoConn } from './DataBase/dbConnection.js'
import homeRouter from './Src/Home/HomeRoutes.js'
import registerRouter from './Src/Register/RegisterRoutes.js'
import loginRouter from './Src/Login/LoginRoutes.js'
import messageRouter from './Src/Message/messageRoutes.js'
import userRouter from './Src/User/UserRoutes.js'
import session from 'express-session'
import dotenv from 'dotenv'
import mongoSession from 'connect-mongodb-session'
import logoutRouter from './Src/Logout/LogoutRoutes.js'
import flash from 'connect-flash'

const MongoDBStore= mongoSession(session)



let store = new MongoDBStore({
  uri:'mongodb://127.0.0.1:27017/Sara7a_MVC',
  collection: process.env.MONGO_COLLECTION
});
dotenv.config()



const app = express()
const port = process.env.PORT
app.use(flash())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(session({
  secret: process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: false,
  store:store
}))
  

app.use(homeRouter)
app.use(registerRouter)
app.use(loginRouter)
app.use(messageRouter)
app.use(userRouter)
app.use(logoutRouter)



mongoConn()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))