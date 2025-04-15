const express = require("express");
const Recipe = require("../models/Recipe");
const router = express.Router();

// GET all recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET by name
router.get("/:name", async (req, res) => {
  try {
    const recipe = await Recipe.findOne({ name: req.params.name });
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new recipe
router.post("/", async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
