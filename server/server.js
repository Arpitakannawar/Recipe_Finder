const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

const recipes = require('./category.json'); // Use your JSON file

app.use(cors());

// API endpoint to get a recipe by name
// Add this to your Express server
app.get('/api/localRecipes', (req, res) => {
    const { id, name } = req.query;
  
    let recipe;
  
    if (id) {
      recipe = recipes.find((r) => r._id === id);
    } else if (name) {
      recipe = recipes.find(
        (r) => r.name.toLowerCase() === name.toLowerCase()
      );
    }
  
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
