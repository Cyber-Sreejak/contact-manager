const mongoose = require("mongoose");

const contactPostModel = mongoose.Schema({
  email: String,
  fullName: String,
  phone: Number,
  contactId: String,
  // imageUrl: String,
});

contactPostModel.set("timestamps", true);

module.exports = mongoose.model("contact", contactPostModel);
