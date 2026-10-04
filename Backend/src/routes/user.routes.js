const express = require("express");
const { identifyUser } = require("../middlewares/auth.middleware");
const userRouter = express.Router();
const userController = require("../controllers/user.controller");

userRouter.post(
  "/follow/:username",
  identifyUser,
  userController.followUserController,
);

userRouter.post(
  "/unfollow/:username",
  identifyUser,
  userController.unfollowUserController,
);

//pending request

userRouter.get("/pending", identifyUser, userController.getPendingController);

//accept request

userRouter.post(
  "/accept/:requestId",
  identifyUser,
  userController.acceptRequestController,
);

//rejected request

userRouter.post(
  "/reject/:requestId",
  identifyUser,
  userController.rejectRequestController,
);

module.exports = userRouter;
