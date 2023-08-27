const {User} = require('../models');

const userData = [
    {
      username: 'iluvCats',
      password: 'abc123',
      planet_id: 8
    },
    {
      username: 'JaneDoughy',
      password: 'AstroFan23',
      planet_id: 6
    },
    {
      username: 'SkyNet97',
      password: 'mymomissarahconnor',
      planet_id: 3
    },
    {
      username: 'STCathy',
      password: 'chickeninventor',
      planet_id: 2
    },
    {
      username: 'BGates75',
      password: 'billandmelissa4ever',
      planet_id: 7 
    }
  ];
  
  const seedUser = () => User.bulkCreate(userData);
  
  module.exports = seedUser;
