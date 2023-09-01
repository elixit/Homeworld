const {Planet} = require('../models');

const planetData = [
    {
      planet_name: 'Mercury',
      planet_size: '4,879 km',
      planet_distance: '57,900,000 km',
      planet_temperature: '167°C',
      number_moons: '0 moons',
      planet_photo: 'images/mercury.png'
    },
    {
      planet_name: 'Venus',
      planet_size: '12,104 km',
      planet_distance: '108,200,000 km',
      planet_temperature: '464°C',
      number_moons: '0 moons',
      planet_photo: 'images/venus.png'

    },
    {
      planet_name: 'Earth',
      planet_size: '12,756 km',
      planet_distance: '149,600,000 km',
      planet_temperature: '15°C',
      number_moons: '1 moon',
      planet_photo: 'images/earth.png'
    },
    {
      planet_name: 'Mars',
      planet_size: '6,792 km',
      planet_distance: '227,900,000 km',
      planet_temperature: '-65°C',
      number_moons: '2 moons',
      planet_photo: 'images/mars.png'
    },
    {
      planet_name: 'Jupiter',
      planet_size: '142,984 km',
      planet_distance: '778,600,000 km',
      planet_temperature: '-110°C',
      number_moons: 'Between 80 to 95 moons',
      planet_photo: 'images/jupiter.png'

    },
    {
      planet_name: 'Saturn',
      planet_size: '120,536 km',
      planet_distance: '1,433,500,000 km',
      planet_temperature: '-140°C',
      number_moons: '146 moons',
      planet_photo: 'images/saturn.png'
    },
    {
      planet_name: 'Uranus',
      planet_size: '51,118 km',
      planet_distance: '2,872,500,000 km',
      planet_temperature: '-195°C',
      number_moons: '27 moons',
      planet_photo: 'images/uranus.png'
    },
    {
      planet_name: 'Neptune',
      planet_size: '49,528 km',
      planet_distance: '4,495,100,000 km',
      planet_temperature: '-200°C',
      number_moons: '14 moons',
      planet_photo: 'images/neptune.png'
    }
  ];
  
  const seedPlanet = () => Planet.bulkCreate(planetData);
  
  module.exports = seedPlanet;
  