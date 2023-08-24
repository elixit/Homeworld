const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Planet extends module {}

Planet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          planet_name: {
            type: DataTypes.STRING
          },
          planet_size: {
            type:DataTypes.STRING
          },
          planet_distance: {
            type:DataTypes.STRING

          },
          planet_temperature: {
            type: DataTypes.STRING
          },
          number_moons: {
            type:DataTypes.INTEGER
          },

    },
);

module.exports = Planet; 