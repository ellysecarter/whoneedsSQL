// import router from Express.js
const router = require('express').Router();


// import our GET, POST, DELETE, and PUT requests for users
const userRoutes = require('./user-routes.js');


const optionRoutes = require('./option-routes');

const questionRoutes = require('./question-routes');
///////////////////////////////////////////


// we write /users so all of our userRoutes endpoints have this before
router.use('/users', userRoutes);

router.use('/options', optionRoutes);

router.use('/questions', questionRoutes);



//////////////////////////////////////////


// we must export this file so it can be attached in server.js
module.exports = router;