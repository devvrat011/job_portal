import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
// import path from 'path';
import mongoose from "mongoose";

dotenv.config({});

const app = express();
const corsOptions = {
    origin: function (origin, callback) {
        callback(null, true); // Allow all origins
    },
    credentials: true // Allows credentials to be sent
}


// Enable CORS for all requests or specify your frontend URL
app.use(cors(corsOptions));

// const __dirname = path.resolve();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(PORT,()=>console.log(`Server port : ${PORT}`));
})
.catch((error)=>console.log(`${error} did not connect`));

// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// app.use(express.static(path.join(__dirname, '/frontend/dist')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
// });

// app.listen(PORT, async ()=>{
//     await connectDB();
//     console.log(`Server running at port ${PORT}`);
// })