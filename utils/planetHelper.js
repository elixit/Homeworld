const Planet = require('../models/planet'); 
const router  = require("express").Router();

router.get('/planet/:id', withAuth, (req, res) => {
    post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'planet_name',
            'planet_size',
            'planet_distance',
            'planet_temperature',
            'number_moons'
        ]    
        })
        

    })


.then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }