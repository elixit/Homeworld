const router  = require("express").Router();
const userRoutes = require('./userRoutes');
const planetRoutes = require('./planetRoutes');
const commentRoutes = require('./commentRoutes')

router.use('/users', userRoutes);
router.use('/planets', planetRoutes);
router.use('/comments', commentRoutes);






module.exports = router;