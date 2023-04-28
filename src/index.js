import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import {userRouter} from './routes/users.js'
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect("mongodb+srv://TudorMiron21:TudorMiron21@devops-project.rcpdnrl.mongodb.net/test")

app.listen(3001,() => console.log("server started"));