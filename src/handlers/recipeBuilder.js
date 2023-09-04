const recipeBuilder = (data) => {
  if (!data) throw new Error("No data");

  const dietsKey = ["vegetarian", "vegan", "glutenFree"];

  const diets = [];

  dietsKey.forEach((diet) => {
    if (data[diet]) diets.push(diet);
  });

  return {
    id: data.id,
    name: data.title,
    image: data.image,
    summary: data.summary,
    healthScore: data.healthScore,
    time: data.readyInMinutes,
    steps: data.analyzedInstructions[0]?.steps.map((step) => step.step),
    diets: [...diets, ...data.diets],
  };
};

module.exports = { recipeBuilder };
