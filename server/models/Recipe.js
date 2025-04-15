const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: String,
  category: String,
  area: String,
  instructions: String,
  thumbnail: String,
  ingredients: [String],
});

module.exports = mongoose.model("Recipe", recipeSchema);
