import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// creating the user schema for the database. This is a model. This is a blueprint for the user.
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true, //this is a required field in the database schema for the user model to be created
    },
    email: {
      type: String,
      required: true,
      unique: true, //this means that the email has to be unique. It cannot be the same as another email in the database.
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false, // This means when a user is created, The user is not an admin
    },
  },
  {
    timestamps: true, // this means that the user will have a created at and updated at field in the database
  }
);

//bycrypt is used to hash the password. It takes in the password and the number of rounds to hash the password. The higher the number of rounds, the more secure the password is. However, it will take longer to hash the password. The default number of rounds is 10.

// bcrypt.compare() returns a promise, so we need to use async/await
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// this is a mongoose middleware. This will run before the user is saved to the database. This will hash the password before it is saved to the database.
userSchema.pre("save", async function (next) {
  // if the password is not modified, then we do not need to hash the password again. We only need to hash the password if it is modified.
  if (!this.isModified("password")) {
    next();
  }
  // the number of rounds to hash the password. The higher the number of rounds, the more secure the password is. However, it will take longer to hash the password. The default number of rounds is 10.
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// now creating a user model. This is a model that we can use to create a user.
const User = mongoose.model("User", userSchema);

export default User;
