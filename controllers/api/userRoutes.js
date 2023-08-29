const router  = require("express").Router();
const {User} = require('../../models');


// /api/users/ url to create user 

router.post('/', async (req, res)=> {
    try {
        const userData = await User.create(req.body)
        // cookie sess 
        req.session.save(()=> {
            req.session.userid = userData.id;
            req.session.username = userData.username;
            req.session.log_in = true;

            res.status(200).json(userData);

        });
        if (!userData){
            res.status(400).json({message:'No User'})
        }
    } catch (error) {
     console.log(error);
     res.status(500).json(error);   
    }
});

// login route 

router.post('/login', async (req, res)=> {
    try {        
        const userData = await User.findOne({where: {username: req.body.username}});   
        console.log(userData);     

    if (!userData){
        res.status(400).json({message: 'Not Correct Username or Password'});
        return;
    }

    const validatePW = await userData.checkpassword(req.body.password);

    console.log(validatePW);

    if (!validatePW) {
        res.status(400).json({message: 'Not Correct Username or Password'});
        return;
    }
    
    req.session.save(() => {
        req.session.userid = userData.id;
        //req.session.username = userData.username;
        req.session.log_in = true;

        res.json({ user: userData, message: 'You are now logged in!' });
    })
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
        
    }
});

// logout route 

router.post('/logout', (req, res)=> {
    if (req.session.log_in){
        req.session.destroy(()=> {
            res.status(200).end();
        });

    } else{

        res.status(400).end();
    }
});

// get all users 
router.get('/', async (req, res) => {
    try {
        userData = await User.findAll();

        res.status(200).json(userData);

        if (!userData) {
            res.status(400).json({ message: 'No User Found'});
            return;
        }

    } catch (error) {
        console.log(error);
        res.status(500).json(error); 
    }
});

// get one user 

router.get('/:id', async (req, res) => {
    try { 
        const userData = await User.findOne({
            where: { id: req.params.id }, 
        });

        res.status(200).json(userData); 

        if (!userData) {
            res.status(400).json({ message: 'No User Found'});
            return;
        }
        
    } catch (error) {
        console.log(error); 
        res.status(500).json(error); 
        
    }
});

// update user info 

router.put('/:id', async (res, req) => {
    try {
        const userData = await User.update(req.body, {
            where:{
                id: req.params.id
            },
        });
        if (!userData){
            res.status(400).json({ message: 'No User'});
            return;
        }
        res.status(200).json(userData);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        
    }
});

// delete user

router.delete('/:id', async (req, res) => {
    try { 
        const userData = await User.destroy({
            where: { id: req.params.id }
        })

        if (!userData) {
            res.status(400).json({message: 'No User'}); 
            return;
        }
        res.status(200).json(userData); 

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});


module.exports = router;