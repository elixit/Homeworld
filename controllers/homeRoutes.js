const router  = require("express").Router();
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
            user, login: req.session.login,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/login', (res, req) => {
    if (req.session.login) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// Added this block for login handlebars
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

module.exports = router;