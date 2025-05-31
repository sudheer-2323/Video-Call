import express from "express";
import {createServer} from "node:http";

import { connectToSocket } from "./controllers/socketManager.js";
import mongoose from "mongoose";

import cors from "cors";
import { create } from "node:domain";
import userRoutes from "./routes/users.routes.js"

const app=express();
const server=createServer(app);
const io=connectToSocket(server);


app.set("port",(process.env.PORT || 8080));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));
app.use("/api/v1/users",userRoutes);


const start= async ()=>{
    const connectionDb=await mongoose.connect("mongodb+srv://sudheermuppineedi:KyFcApNqw2cq2xk2@cluster0.wtb9hlt.mongodb.net/");

    console.log(`mongo connected to db host :,${connectionDb.connection.host}`);
    server.listen(app.get("port"),()=>{
        console.log("listening on port 8080");
    }); 
}
start();