require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const responseMapper = require("./responseMapper");
const { recipeBuilder } = require("./recipeBuilder");
const { addOrUpdateDiets } = require("./addOrUpdateDiets");
const { dietListBuilder } = require("./dietListBuilder");
const BASE_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`;
const EXTRA_QUERY = `addRecipeInformation=true&number=1000`;

const recipesApi = async (name = null) => {
  const { data } = await axios(
    name
      ? `${BASE_URL}&query=${name}&${EXTRA_QUERY}`
      : `${BASE_URL}&${EXTRA_QUERY}`
  );

  const recipes = responseMapper(data, recipeBuilder);

  await addOrUpdateDiets(dietListBuilder(recipes));

  return recipes;
};

module.exports = { recipesApi };
