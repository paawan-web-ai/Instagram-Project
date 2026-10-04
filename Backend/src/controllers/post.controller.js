const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const likeModel = require("../models/like.model");

const imagekit = new ImageKit({
  privateKey: process.env.IMG_PRIVATE_KEY,
});

async function createPostController(req, res) {
  //   console.log(req.file, req.body);

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder: "instagram_Project",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: "post created successfully",
    post,
  });
}

async function getPostController(req, res) {
  const userId = req.user.id;

  const posts = await postModel.find({
    user: userId,
  });

  res.status(200).json({
    message: "Post fetched successfully",
    posts,
  });
}

async function getPostDetailsController(req, res) {
  const postId = req.params.postId;
  const userId = req.user.id;

  const postDetails = await postModel.findbyId(postId);

  if (!postDetails) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  const isValidUser = postDetails.user.toString() === userId;

  if (!isValidUser) {
    return res.status(400).json({
      message: "Forbidden content",
    });
  }

  res.status(200).json({
    message: "PostDetail fetched successfully",
    postDetails,
  });
}

async function likePostController(req, res) {
  const postId = req.params.postId;
  const username = req.user.username;

  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({
      message: "post not found",
    });
  }

  const like = await likeModel.create({
    post: postId,
    user: username,
  });

  res.status(200).json({
    message: "post liked successfully",
    like,
  });
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
  likePostController,
};
