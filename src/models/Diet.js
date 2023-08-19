const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("diet", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name : {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
  },{
    timestamps: false
  });
};
