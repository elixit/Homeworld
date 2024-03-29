const router  = require("express").Router();
const {User, Planet, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// create post 

router.post ('/', withAuth, (req , res) => {
    Comment.create({
        // id: req.body.id,      
        planet_id: req.body.planet_id,        
        comment_text: req.body.postContent,
        user_id: req.session.userid
        
      })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    })

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

// get one commment by its id 

router.get('/planet/:id', (req, res) => {
    Comment.findOne ({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'comment_text',
            'user_id',
            'planet_id'
        ],        
        include: [
            {
                model: User,
                attributes: ['id', 'username']
            },
            {
                model: Comment,
                attributes: ['id','comment_text', 'user_id', 'planet_id'],
                include: {
                    model: User,
                    attributes: ['id', 'username']
                }
            }
        ]
    })
    .then(commentData => {
        if(!commentData){
            res.status(400).json({message: 'No Comment'});
            return;
        }
        res.json(commentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get all comments 

router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll();

        if (!commentData){
            res.status(400).json({message: 'No Comments Found'});

        }
        res.status(200).json(commentData);
    } catch (error) {
        console.log(error);
        req.status(500).json(error);
    }
});



module.exports = router;