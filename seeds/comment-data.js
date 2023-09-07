const {Comment} = require('../models');

const commentData = [
    {   
      comment_text: "This planet has more craters than other planets in the Solar System.",
      user_id: 1,
      planet_id: 1,
    },
    {
  
      comment_text: "This is my favorite planet.",
      user_id: 2,
      planet_id: 2,
    },
    {
  
      comment_text: "This is the mischievous planet.",
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
      
      comment_text: "The Ring of Power.",
      user_id: 2,
      planet_id: 6,

    },
    {
      
      comment_text: "Did you know that you can't stand on Saturn?",
      user_id: 1,
      planet_id: 6,

    },
    {
      
      comment_text: "So you could say that on Saturn, you will fall for anything.",
      user_id: 2,
      planet_id: 6,

    },
    {
      
      comment_text: "Saturn also has more moons than any other planet. Over 80!",
      user_id: 1,
      planet_id: 6,

    },
    {
      
      comment_text: "That's nuts! Or you could say, that's lunar.",
      user_id: 2,
      planet_id: 6,

    },
    {
      
      comment_text: "Did you know that 1 year on Saturn is 29 Earth years?",
      user_id: 1,
      planet_id: 6,

    },
    {
      
      comment_text: "So in just 3 or 4 years, everybody I know would be gone? That's Sad... urn.",
      user_id: 2,
      planet_id: 6,

    },
    {
      
      comment_text: "Its rings stretch more than 75,000 miles and yet they're only 21 yards thick!",
      user_id: 1,
      planet_id: 6,

    },
    {
      
      comment_text: "It's so beautiful that Mars called up Saturn and asked her to give him a ring sometime.",
      user_id: 2,
      planet_id: 6,

    },
    {
      
      comment_text: "The rings are actually made of dust, ice, and rock.",
      user_id: 1,
      planet_id: 6,

    },
    {
      
      comment_text: "So it's quite the SPECK-tacle..",
      user_id: 2,
      planet_id: 6,

    },
    {
      
      comment_text: "One of Saturn's moons, Enceladus, has ice geysers that blast ice into orbit at 800 miles per hour. The ice forms a ring around Enceladus and feeds into one of Saturn's rings.",
      user_id: 1,
      planet_id: 6,

    },
    {
      
      comment_text: "That's cool! Literally.",
      user_id: 2,
      planet_id: 6,

    },

    {
     
      comment_text: "63 Earths could fit inside of this planet!",
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