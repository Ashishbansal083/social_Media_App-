import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'

const app=express();


app.use(bodyParser.json({limit:"30mb",extended:"true"}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:"true"}));

dotenv.config()

// let localURL = "mongodb://localhost:27017/social_media?retryWrites=true&w=majority";
// let serverURL = "mongodb+srv://ashish:zir1MOcxQraFyPBz@cluster0.am8o2iv.mongodb.net/social_media?retryWrites=true&w=majority";
let serverURL2 = process.env.MONGO_DB;
mongoose
.connect(
    serverURL2,
    {useNewUrlParser: true,useUnifiedTopology: true,}
)
.then(()=>app.listen(process.env.PORT,()=>console.log("Database connected")))
.catch((error)=>console.log(error));

//usage of routes
app.use('/auth',AuthRoute)
app.use('/user',UserRoute)
app.use('/post',PostRoute)