const {Model, DataTypes} = require("sequelize");
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


class User extends Model { 
    checkpassword(loinpw){
        return bcrypt.compareSync(loinpw, this.password);
    }
}

User.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          username: {
            type: DataTypes.STRING,
            allowNull: false,
          },
         
          password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [8,20],
            },
          }, 
          planet_id: {
            type: DataTypes.INTEGER,
          }
          
},
{
    hooks: {
        async beforeCreate(newUserData) {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'User',
    }
);

module.exports = User; 