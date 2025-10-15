import { db } from "./config/firebaseConfig";
import express from "express";
import { HTTP_STATUS
    
 } from "./constants/httpConstants";
const app: express.Application = express();

app.use(express.json());

