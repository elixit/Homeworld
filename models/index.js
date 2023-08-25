const router = require('../controllers');
const { route } = require('../controllers');
const withAuth = require('../utils/auth');
const User = require('./User'); 
const Planet = require('./planet');


// might need to connect users to planets for homeworld belongs to or has many 





module.exports = {User, Planet}; 