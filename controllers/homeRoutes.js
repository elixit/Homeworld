const router  = require('express').Router();
const {User} = require('../models');
const withAuth = require('../utils/auth');



// auth js 

router.get('/', withAuth, async (req, res)=> {
    try {
        const userData = await User.findAll({
            attributes: { exclude :['password']},
            order:[['username', 'ASC']],
        });
        const user = userData.map((project)=> project.get({plain:true}));

        res.render('login', {
            user, log_in: req.session.log_in,
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

router.get('/dashboard', withAuth, (req, res) => {
    let model = {
        loggedIn: req.session.log_in } // detele all once helper is done 

        // Add session from helper
    res.render('dashboard', model); 
})

router.get('/explore', withAuth, (req, res) => {
    let model = {
        loggedIn: req.session.log_in,
        layout: 'explayout'
    }
    res.render('explore', model)
})





router.get('/planet', withAuth, (req, res) => {    
    res.render('planet', {layout: 'explayout'})
})

module.exports = router;