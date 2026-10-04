const express = require("express");
const postRouter = express.Router();
const multer = require("multer");
const { identifyUser } = require("../middlewares/auth.middleware");
const upload = multer({ Storage: multer.memoryStorage() });
const postController = require("../controllers/post.controller");

postRouter.post(
  "/",
  upload.single("image"),
  identifyUser,
  postController.createPostController,
);

postRouter.get("/", identifyUser, postController.getPostController);

postRouter.get("/details/:postId", postController.getPostDetailsController);

postRouter.post(
  "/like/:postId",
  identifyUser,
  postController.likePostController,
);

module.exports = postRouter;
