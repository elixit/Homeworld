
const User = require('../models/User');

 async function buildData (log_in, user_id){

   const model = {};

   model.log_in = log_in;
   model.user_id = user_id;

   const userData = await User.findByPk( user_id)
   console.log(userData);
   model.user = userData.get({plain: true})
   console.log(model);
   return model;
};

module.exports = buildData;