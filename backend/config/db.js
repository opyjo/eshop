//This module connects to the database

import mongoose from "mongoose";

// connecting to database using mongoose. This returns a promise. We can use the .then() method to get the result of the promise or we can use async await to get the result of the promise. Which is what I am doing in this case.
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

export default connectDB;
