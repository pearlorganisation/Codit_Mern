import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import { connectToMongoDB } from "./src/config/db/connectToMongoDB.js";
import authRouter from "./src/routes/auth/authRoutes.js";
import prodCatRouter from "./src/routes/productCategory/productCategoryRoutes.js";
import { errorHandler, notFound } from "./src/utils/errorHandler.js";
import { productRouter } from "./src/routes/product/product.js";
import { categoryRouter } from "./src/routes/category/category.js";
import { subCategoryRouter } from "./src/routes/subCategory/subCategory.js";
import { contactUsRouter } from "./src/routes/contact_us/contact_us.js";
import { couponRouter } from "./src/routes/coupon/coupon.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json({ extended: false }));
app.use(morgan("dev"));
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

//Routes Declaration
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/prodCat", prodCatRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/sub-category", subCategoryRouter);
app.use("/api/v1/contact-us", contactUsRouter);
app.use("/api/v1/coupon", couponRouter);

//Test Routes
app.get("/", (req, res) => {
  res.send("Server up and running");
});

app.use(errorHandler);
app.use(notFound);

connectToMongoDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`MongoDB Connection Failed!! ${error}`);
  });
