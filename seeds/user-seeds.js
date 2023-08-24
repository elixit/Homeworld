const {User} = require('../models');

const userData = [
    {
      username: 'iluvCats',
      password: 'abc123',
    },
    {
      username: 'JaneDoughy',
      password: 'AstroFan23'
    },
    {
      username: 'SkyNet97',
      password: 'mymomissarahconnor'
    },
    {
      username: 'STCathy',
      password: 'chickeninventor'
    },
    {
      username: 'BGates75',
      password: 'billandmelissa4ever' 
    }
  ];
  
  const seedUser = () => User.bulkCreate(userData);
  
  module.exports = seedUser;
