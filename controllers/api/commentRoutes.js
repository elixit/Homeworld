const router  = require("express").Router();
const {Comment } = require('../../models');


// create post 

router.post ('/', async (req , res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComment);
        
    } catch (error) {
        res.status(400).json(error);
        
    }
});

router.delete('/:id', async (req, res)=> {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        res.status(200).json(commentData); 
        
    } catch (error) {
        res.status(500).json(error);
        
    }
});



module.exports = router;