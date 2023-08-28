const { recipesApi } = require("../handlers/recipeApi");
const { recipesDatabase } = require("../handlers/recipesDatabase");

const getRecipes = async (req, res) => {
  const { name } = req.query;
  try {
    if (typeof name !== "string")
      return res.status(400).json({ error: "Invalid query" });
    
    const recipeApi = await recipesApi(name);
    const recipeDatabase = await recipesDatabase(name);

    const recipes = [...recipeApi, ...recipeDatabase];

    return res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getRecipes,
};
