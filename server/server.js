import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import { connectToMongoDB } from "./src/config/db/connectToMongoDB.js";
import authRouter from "./src/routes/auth/authRoutes.js";
import verifyRouter from "./src/routes/verify/verify.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

//Routes Declaration
app.use("/api/v1/auth", authRouter);


app.use("/api/v1/verify", verifyRouter);

//Test Routes
app.get("/", (req, res) => {
  res.send("Server up and running");
});


app.all('*',(req,res)=>{

  res.status(404).send("Opps Run into wrong path")

})

connectToMongoDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`MongoDB Connection Failed!! ${error}`);
  });
