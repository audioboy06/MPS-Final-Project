const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  listName: { type: String, required: true },
  listItem: { type: String },
  owner: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now }
});

const Lists = mongoose.model("Lists", listSchema);

module.exports = Lists;
