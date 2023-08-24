const {Planet} = require('../models');

const planetData = [
    {
      planet_name: 'Mercury',
      planet_size: '4,879 km',
      planet_distance: '57,900,000 km',
      planet_temperature: '167°C'
    },
    {
      planet_name: 'Venus',
      planet_size: '12,104 km',
      planet_distance: '108,200,000 km',
      planet_temperature: '464°C'
    },
    {
      planet_name: 'Earth',
      planet_size: '12,756 km',
      planet_distance: '149,600,000 km',
      planet_temperature: '15°C'
    },
    {
      planet_name: 'Mars',
      planet_size: '6,792 km',
      planet_distance: '227,900,000 km',
      planet_temperature: '-65°C'
    },
    {
      planet_name: 'Jupiter',
      planet_size: '142,984 km',
      planet_distance: '778,600,000 km',
      planet_temperature: '-110°C'
    },
    {
      planet_name: 'Saturn',
      planet_size: '120,536 km',
      planet_distance: '1,433,500,000 km',
      planet_temperature: '-140°C'
    },
    {
      planet_name: 'Uranus',
      planet_size: '51,118 km',
      planet_distance: '2,872,500,000 km',
      planet_temperature: '-195°C'
    },
    {
      planet_name: 'Neptune',
      planet_size: '49,528 km',
      planet_distance: '4,495,100,000 km',
      planet_temperature: '-200°C'
    }
  ];
  
  const seedPlanet = () => Planet.bulkCreate(planetData);
  
  module.exports = seedPlanet;
  