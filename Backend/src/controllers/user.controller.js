const { request } = require("../app");
const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");

async function followUserController(req, res) {
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;

  const isFolloweeExists = await userModel.findOne({
    username: followeeUsername,
  });

  if (!isFolloweeExists) {
    return res.status(404).json({
      message: "user you are trying to follow doesn't exists",
    });
  }

  if (followeeUsername === followerUsername) {
    return res.status(400).json({
      message: "you cannot follow yourself",
    });
  }

  const isAlreadyFollowing = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });

  if (isAlreadyFollowing) {
    return res.status(409).json({
      message: `you are already following ${followeeUsername}`,
      follow: isAlreadyFollowing,
    });
  }

  const followRecord = await followModel.create({
    follower: followerUsername,
    followee: followeeUsername,
  });

  res.status(201).json({
    message: `you are following ${followeeUsername}`,
    followRecord,
  });
}

async function unfollowUserController(req, res) {
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;

  const isUserFollowing = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });

  if (!isUserFollowing) {
    return res.status(200).json({
      message: `you are not following ${followeeUsername}`,
    });
  }

  await followModel.findByIdAndDelete(isUserFollowing._id);

  res.status(200).json({
    message: `you have unfollowed ${followeeUsername}`,
  });
}

async function getPendingController(req, res) {
  const followeeUsername = req.user.username;

  const pendingRequest = await followModel.find({
    followee: followeeUsername,
    status: "pending",
  });

  if (pendingRequest.length === 0) {
    return res.status(404).json({
      message: "No pending follow requests found",
    });
  }
  return res.status(200).json({
    message: "pending follow requests fetched successfully",
    follow: pendingRequest,
  });
}

async function acceptRequestController(req, res) {
  const requestId = req.params.requestId;

  const followRequest = await followModel.findById(requestId);

  if (!followRequest) {
    return res.status(404).json({
      message: "follow request not found",
    });
  }

  followRequest.status = "accepted";

  await followRequest.save();

  return res.status(200).json({
    message: "follow request accepted",
    follow: followRequest,
  });
}

async function rejectRequestController(req, res) {
  const requestId = req.params.requestId;

  const followRequest = await followModel.findById(requestId);

  if (!followRequest) {
    return res.status(404).json({
      message: "Follow request not found",
    });
  }

  followRequest.status = "rejected";

  await followModel.findByIdAndDelete(followRequest._id);

  return res.status(200).json({
    message: "follow request rejected",
    follow: followRequest,
  });
}

module.exports = {
  followUserController,
  unfollowUserController,
  getPendingController,
  acceptRequestController,
  rejectRequestController,
};
