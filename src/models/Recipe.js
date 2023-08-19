const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("recipe", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resume: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    score: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 1.0,
        max: 10.0,
      },
    },
    stepStep: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },{
    timestamps: false,
  });
};
