const { Diet } = require("../db");

const getDiets = async (req, res) => {
  try {
    const rawDiets = await Diet.findAll();
    const allDiets = rawDiets.map((diet) => diet.name);
    return res.status(200).json(allDiets);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getDiets,
};
