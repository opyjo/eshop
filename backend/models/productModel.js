// The model is the part of the MVC that connects to the database by using the mongoose library. The model is responsible for creating the schema and the model. The schema is the structure of the data that is stored in the database. The model is the object that is used to interact with the database. The model is used to create, read, update, and delete data from the database.

//Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

import mongoose from "mongoose";
const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// Creating the Product Schema and Model for the database using mongoose. The schema is the structure of the data that is stored in the database. The model is the object that is used to interact with the database.
const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

//Models are higher-order constructors that take a schema and create an instance of a document equivalent to records in a relational database. Models are responsible for creating and reading documents from the underlying MongoDB database.
// The model method takes three arguments: the singular name of the collection your model is for, the schema you want to use in creating your model, and the name of the collection you want to use for your model. If you don't specify a collection name, Mongoose uses the model name, pluralized. If you don't specify a collection name and don't want Mongoose to pluralize the model name, set the third argument to null.
const Product = mongoose.model("Product", productSchema);

export default Product;
