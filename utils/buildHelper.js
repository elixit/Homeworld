const User = require('../models/User');

const buildData = async (userid) => {

   try {
    const userData = await User.findByPk(userid);
    return userData; 

 
   } catch (error) {
    console.log(error);
    
   }
};

module.exports = buildData;