const dietListBuilder = (recipes) => {
  const uniqueDietsSet = new Set();

  recipes.forEach((recipe) =>
    recipe.diets.forEach((diet) => uniqueDietsSet.add(diet))
  );

  const uniqueDietArray = [...uniqueDietsSet];

  return uniqueDietArray;
};

module.exports = { dietListBuilder };
