const auth2 = (req, res, next) => {

    if (req.session.log_in) {
        
      } else {
        next();
      }
    };
      
    
  
  module.exports = auth2;