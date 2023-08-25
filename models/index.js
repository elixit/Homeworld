const User = require('./User'); 
const Planet = require('./planet');


// might need to connect users to planets for homeworld belongs to or has many 
Planet.belongsTo(User,{
    foreignKey: "planet_id",
    onDelete: "CASCADE"
})

Planet.hasMany(User,{
    foreignKey: "planet_id",
})





module.exports = {User, Planet}; 