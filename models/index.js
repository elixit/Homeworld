const router = require('../controllers');
const User = require('./User'); 
const Planet = require('./planet');
const Comment = require('./comment');

// might need to connect users to planets for homeworld belongs to or has many 
User.belongsTo(Planet,{
    foreignKey: "planet_id",
    onDelete: "SET NULL"
});

Planet.hasMany(User,{
    foreignKey: "planet_id",
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

User.hasMany(Comment, {
   foreignKey: 'user_id' 
});

Comment.belongsTo(Planet, {
    foreignKey: "planet_id",
    onDelete: "CASCADE"
});

Planet.hasMany(Comment, {
    foreignKey: 'planet_id'
})







module.exports = {User, Planet, Comment}; 