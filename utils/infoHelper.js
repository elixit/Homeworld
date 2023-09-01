const Planet = require('../models/planet'); 
const router  = require("express").Router();

router.get('/:id', async (req ,res)=> {
     try {
        let planetInfo = await Planet.findByPk(req.params.id, {
            attributes: [
                'planet_name',
                'planet_size',
                'planet_distance',
                'planet_temperature',
                ' number_moons'
            ]
        })
         planetData = planetInfo.get({ plain: true});
     } catch (error) {
        console.log(error);
        
     }
     
});


module.exports = planetData;