const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

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

  const posts = await postModel.findbyId(userId);

  res.status(200).json({
    message: "Post fetched successfully",
    posts,
  });
}

module.exports = {
  createPostController,
  getPostController,
};
