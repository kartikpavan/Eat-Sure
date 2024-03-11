import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

// declare global {
//    namespace NodeJS {
//       interface ProcessEnv {
//          MONGO_URI: string;
//       }
//    }
// }

mongoose
   .connect(process.env.MONGO_URI as string)
   .then(() => console.log("Connected to MongoDB Successfully"))
   .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
   res.send("Welcome to EATSURE API :) ");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
