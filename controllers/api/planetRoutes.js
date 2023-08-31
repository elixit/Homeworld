const router  = require("express").Router();
const {Planet} = require('../../models');

// URL /api/planets

router.get('/', async (req, res) => {
    // find all planets
    try {
        const foundPlanet = await Planet.findAll({})
        if (!foundPlanet){
        return res.status(400).json({message: "Cannot find planet."})
        }
        return res.status(200).json(foundPlanet)
        }catch (error) {
        req.status(500).json(error);
        console.log(error);
    }
});
 
// get one planet
 
router.get('/:id', (req,res) => {
  Planet.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'planet_name',
      'planet_size',
      'planet_distance',
      'planet_temperature',
      'number_moons'
    ],
   
  })  
    .then(planetData => {
      if (!planetData) {
        res.status(404).json({ message: 'No post matches this id' });
        console.log('after')
        return;
      }
      res.json(planetData);

    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
    
  });



//switch planet route
router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Planet.update(//references correct model
      {
        planet_name: req.body.planet_name,//altered information
      },
      {
        where: {
          id: req.params.id,//targets correct ID
        }
      }
    ).then((updatedPlanet) => {
      res.json(updatedPlanet);
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  });

router.delete('/:id', (req, res) => {
//Deleting a category by its `id` value
    Planet.destroy({//destroy command targets "where" in work scope
      where: {
        id: req.params.id,
      },
    }).then((deletePlanet) => {//named variable to express output
        res.json(deletePlanet);
    }).catch((err) => res.json(err));
});





module.exports = router;