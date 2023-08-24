const router  = require("express").Router();
const {User} = require('../../models');

// /api/users/ url to creat user 

router.post('/', async(req, res)=> {
    try {
        const userData = await User.create(req.body)
        // create cookie sess 
        req.session.save(()=> {
            req.session.userid = userData.id;
            req.session.username = userData.username;
            req.session.log_in = true;
            res.status(200).json(userData);

        })
    } catch (error) {
     console.log(error);
     res.status(500).json(error);   
    }
})
// login route needs cookie sess post method





module.exports = router;