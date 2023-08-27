const { Diet } = require("../db");

const addOrUpdateDiets = async (diets) => {
  for (const diet of diets) {
    await Diet.findOrCreate({
      where: { name: diet },
      defaults: { name: diet },
    });
  }
};

module.exports = { addOrUpdateDiets };
