const router  = require("express").Router();
const sequelize = require('../config/connection')
const {User} = require('../models');
const withAuth = require('../utils/auth');


// auth js 

router.get('/', withAuth, async (req, res)=> {
    try {
        const userData = await User.findAll({
            attributes: { exclude :['password']},
            order:[['name', 'ASC']],
        });
        const user = userData.map((project)=> project.get({plain:true}));

        res.render('homepage', {
            user, log_in: req.session.log_in,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/login', (res, req) => {
    if (req.session.log_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
})


module.exports = router;