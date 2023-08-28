require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Recipe, Diet } = require("../db");
const { recipeBuilder } = require("../handlers/recipeBuilder");
const { addOrUpdateDiets } = require("../handlers/addOrUpdateDiets");
const URL = "https://api.spoonacular.com/recipes";

const getRecipesById = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) return res.status(400).json({ error: "Id is required" });

    if (!id.includes("-")) {
      const { data } = await axios.get(
        `${URL}/${id}/information?apiKey=${API_KEY}&addRecipeInformation=true`
      );

      if (!data) {
        return res.status(404).json({ error: "Recipe not found" });
      }

      const recipe = recipeBuilder(data);

      await addOrUpdateDiets(recipe.diets);

      return res.status(200).json(recipe);
    }

    const recipe = await Recipe.findByPk(id, {
      include: {
        model: Recipe,
        as: "recipes",
        attributes: ["id", "name", "image", "summary", "healthScore", "steps"],
        through: {
          attributes: [],
        },
      },
      include: {
        model: Diet,
        as: "diets",
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    if (!recipe) return res.status(404).json({ error: "Recipe not found" });

    const dietsName = recipe.diets.map((diet) => diet.name);

    return res.status(200).json({
      id: recipe.id,
      name: recipe.name,
      summary: recipe.summary,
      healthScore: recipe.healthScore,
      steps: recipe.steps,
      diets: dietsName,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getRecipesById,
};
