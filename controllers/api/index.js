const router  = require("express").Router();
const userRoutes = require('./userRoutes');
const planetRoutes = require('./planetRoutes');

router.use('/users', userRoutes);
router.use('/planets', planetRoutes);






module.exports = router;