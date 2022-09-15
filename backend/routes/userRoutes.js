// Routes are always created to point to a controller. The controller is where the logic is. The controller will then send the response to the route. The route will then send the response to the frontend. The frontend will then render the response.

// We are also adding the protect middleware to the getUserProfile route. This means that the user must be logged in to access this route. If the user is not logged in, the protect middleware will throw an error. We are not adding the protect middleware to the authUser route because we want the user to be able to access that route without being logged in. we are only adding the protect middleware to the getUserProfile route because we want the user to be logged in to access that route.

import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);

router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
