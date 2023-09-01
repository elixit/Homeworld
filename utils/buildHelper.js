
const User = require('../models/User');

 async function buildData (log_in, user_id){

   const model = {};

   model.loggedIn = log_in;
   model.user_id = user_id;
   
   console.log(user_id)
   const userData = await User.findByPk( user_id)
   console.log(userData);

   model.user = userData.get({plain: true});
   console.log(model);
   return model;
};

module.exports = buildData;