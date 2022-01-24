const mongoose = require("mongoose");

const authModel = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  fullName: String,
});

authModel.set("timestamps", true);

module.exports = mongoose.model("auth", authModel);
