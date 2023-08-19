require("dotenv").config();
const axios = require("axios");
const { Recipe } = require("../db");
const URL = "https://api.spoonacular.com/recipes";
const { API_KEY } = process.env;

const getRecipeByName = async (req, res) => {
  try {
    const { name } = req.query;
    let data;
    // if (id.includes("priv_")) {
    //   data = await Recipe.findOne({
    //     where: {
    //       id: id,
    //     },
    //   });
    // } else if (typeof Number(id) === "number") {
    //   let response = await axios(`${URL}/${id}/information?apiKey=${API_KEY}`);

    //   data = response.data;
    // }

    // return data
    //   ? res.status(200).json(data)
    //   : res.status(404).send(`Recipe with id:${id} not found`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getRecipeByName,
};
