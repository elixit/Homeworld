const router  = require("express").Router();
const {Planet} = require('../../models');

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
   

router.get('/:id', async (req,res) => {
    try {
    const onePlanet = await Planet.findOne({
        where: {
            id: req.params.id
        }
    })
    if (!onePlanet){
        return res.status(400).json({
          message: "Cannot find planet."
        })
      }
      return res.status(200).json(onePlanet)
    }catch (error) {
        req.status(500).json(error);
        console.log(error);
    }
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