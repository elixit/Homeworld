const router  = require("express").Router();
const sequelize = require('../config/connection')
const {User} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
          // Retrieve all posts from db
        const userData = await User.findAll({
            attributes: ['id', 'username', 'password', 'planet_id'],           
            include: [
                {
                        model: User,
                        attributes: ['username'],
                    },
                
                {
                    model: User,
                    attributes: ['planet_id'],
                },
            ],
            order: [['id']],
        })
        // Serialize data retrieved
        const user = userData.map((project)=> project.get({plain:true}));
        console.log(user)
        // Respond with template to render along with date retrieved
        res.render('homepage', 
            { user, 
            loggedIn: req.session.loggedIn, 
            username: req.session.username,
            userId: req.session.userId });
    } catch (err) {
        res.status(500).json(err);
    }
});
