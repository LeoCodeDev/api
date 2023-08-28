const { Recipe, Diet } = require("../db");

const recipesDatabase = async (name) => {
  const whereOptions = name
    ? {
        where: { name },
      }
    : {};

  const recipes = await Recipe.findAll({
    ...whereOptions,
    include: {
      model: Diet,
      as: "diets",
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const transformedRecipes = recipes.map((recipe) => {
    const transformedDiets = recipe.diets.map((diet) => diet.name);
    return {
      ...recipe.toJSON(),
      diets: transformedDiets,
    };
  });

  return transformedRecipes;
};

module.exports = { recipesDatabase };
