const { DataTypes } = require('sequelize');
// Exportamos una función que define el modelo
// Luego le inyectamos la conexión a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true, // en caso que no tome la descripción
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "Unknown",
      allowNull: true,
    },
    released: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Unknown"
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: "Unknown"
    }
  });
};
