const {Comment} = require('../models');

const commentData = [
    {
   
      comment_text: "This project is so neat!",
      user_id: 1,
      planet_id: 1,
    },
    {
  
      comment_text: "This is my favorite planet.",
      user_id: 2,
      planet_id: 2,
    },
    {
  
      comment_text: "This is the worst planet",
      user_id: 3,
      planet_id: 3,
    },
    {
  
      comment_text: "Why is it so red there?",
      user_id: 4,
      planet_id: 4,
    },
    {
      
      comment_text: "Big planet so cool.",
      user_id: 5,
      planet_id: 5,
    },
    {
      
      comment_text: "The RINGS. The. Rings.",
      user_id: 1,
      planet_id: 6,

    },
    {
     
      comment_text: "Haha Uranus.",
      user_id: 3,
      planet_id: 7,
    },
    {
      
      comment_text: "Where is Pluto on here?",
      user_id: 2,
      planet_id: 8,
    }
  ];
  
  const seedComment = () => Comment.bulkCreate(commentData);
  
  module.exports = seedComment;