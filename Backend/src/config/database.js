const mongoose = require("mongoose");

async function connectToDB() {
  await mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("connected TO DB..");
  });
}

module.exports = connectToDB;
