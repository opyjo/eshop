// This file/module helps connect the database to the server when the server starts. This is done in the server.js file. We are exporting the connectDB function so that we can use it in the server.js file. we are using mongoose to connect to the database. We are using the connect method of mongoose to connect to the database. We are passing in the connection string as the first argument. The second argument is an object with some options. We are using the useNewUrlParser option to use the new url parser. We are using the useUnifiedTopology option to use the new server discovery and monitoring engine. We are using the try catch block to catch any errors that might occur while connecting to the database. We are using the console.log() method to log the connection string to the console. We are using the process.exit() method to exit the process with failure.
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
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
