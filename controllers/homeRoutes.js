const router  = require('express').Router();
const {User, Comment} = require('../models');
const withAuth = require('../utils/auth');
const Planet = require('../models')

const buildData = require('../utils/buildHelper');

// auth js 

router.get('/', withAuth, async (req, res)=> {
    try {
        const userData = await User.findAll({
            attributes: { exclude :['password']},
            order:[['username', 'ASC']],
        });
        const user = userData.map((project)=> project.get({plain:true}));

        res.render('login', {
            user, log_in: req.session.log_in            
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/login', (req, res) => {
    if (req.session.log_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
})

router.get('/register', (req, res) => {
    if (req.session.log_in) {
        res.redirect('/');
        return;
    }
    res.render('register');
})

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        console.log('hi');
        const model =   await buildData( req.session.log_in, req.session.userid );
        
       console.log(model); 
        res.render('dashboard', model); 


} catch (err) {
res.status(500).json(err);

}});

router.get('/explore', withAuth, (req, res) => {
    let model = {
        loggedIn: req.session.log_in,
        layout: 'explayout'
    }
    res.render('explore', model)
    
});

// This was the old.

// router.get('/planet', withAuth, (req, res) => {    
//     let model = {
//         loggedIn: req.session.log_in,
//         layout: 'explayout'
//     }
//     res.render('planet', model)
// })

// This is the beginning of new.

// I was tired and checked out, but my need to solve this mystery
// pushed me into the late hours. In that tech blog, under home-routes,
// you will see a router.get('/post/:id' (ours is /planets/:id, I believe)
// and underneath that, a render of the single-post handlebar (ours is planet).
// I wasn't able to get it to render, but I feel like this is the right track.

router.get('/planet/:id', (req, res) => {    
    res.render('planet', {Planet});
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
        include: [
            {
              model: Comment,
              attributes: ['id', 'comment_text', 'user_id', 'planet_id'],              
            },
            {
              model: User,
              attributes: ['username', 'planet_id']
            }
          ]
        })  
        
        .then(planetData => {
            if (!planetData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
            }

            const Planet = planetData.get({ plain: true });                        
            
        })    
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    console.log('after')
});
        
router.get('/about', withAuth, (req, res) => {
    let model = {
        loggedIn: req.session.log_in,
        layout: 'explayout'
    }
    res.render('about', model)
    
});

module.exports = router;