const { Router } = require("express");
const { getRecipesById } = require("../controllers/getRecipesById.js");
const { getRecipes } = require("../controllers/getRecipes.js");
const { postRecipes } = require("../controllers/postRecipes.js");
const { getDiets } = require("../controllers/getDiets.js");

const router = Router();

router.get("/recipes/:id", getRecipesById);
router.get("/recipes/", getRecipes);
router.post("/recipes", postRecipes);
router.get("/diets", getDiets);

module.exports = router;
