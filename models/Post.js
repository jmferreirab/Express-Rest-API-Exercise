const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", PostSchema);
