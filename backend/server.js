import morgan from "morgan";
import express from "express";
import path from "path";
import connectDB from "./config/db.js";
import cors from "cors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config(); // This is for the .env file that contains the MONGO_URI  and the JWT_SECRET
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// the below code is a middleware that allows us to accept json data in the body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cors is a middleware that allows us to access the server from another domain. This is useful when we are developing the server on localhost and want to access it from another domain. This is not necessary when we are deploying the server to a live server.
app.use(cors());

// connecting to the database
connectDB();

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port  ${PORT}`
  );
});
