const {Router} = require('express');
const {getRecipesById} = require('../controllers/getRecipesById.js');
const {getRecipesByName} = require('../controllers/getRecipesByName.js');
const { postRecipes } = require('../controllers/postRecipes.js');
const { getDiets } = require('../controllers/getDiets.js');


const router = Router();

router.get('/recipes/:id', getRecipesById)
router.get('/recipes/', getRecipesByName)
router.post('/recipes', postRecipes)
router.get('/diets', getDiets)

module.exports = router;