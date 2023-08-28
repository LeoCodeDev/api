const { Diet, Recipe } = require("../db");

const postRecipes = async (req, res) => {
  const { name, image, summary, healthScore, steps, diets } = req.body;

  try {
    if (!name || !steps || !diets)
      return res.status(400).json({ error: "Missing data" });

    const [newRecipe, created] = await Recipe.findOrCreate({
      where: { name },
      defaults: {
        name,
        image: image ? image : `https://i.ibb.co/PGxRRsK/2.png`,
        summary: summary ? summary : `Summary not provided`,
        healthScore: healthScore ? healthScore : 0,
        steps,
      },
    });

    for (const dietName of diets) {
      const [diet] = await Diet.findOrCreate({
        where: { name: dietName },
        defaults: { name: dietName },
      });

      await newRecipe.addDiet(diet);
    }

    return res.status(created ? 201 : 200).json(newRecipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postRecipes,
};
