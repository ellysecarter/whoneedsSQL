const router = require('express').Router();


const sequelize = require('../config/connection');


const { Question, User, Options} = require('../models');

const authMiddleware = require('../utils/auth-middleware');

/////////////////////////////////////////


// set up our root directory '/'

router.get('/', (req, res) => {

    res.render('homepage', {loggedIn:req.session.loggedIn});
    
})


/////////////////////////////

router.get('/login', (req, res) => {

    // we dont need 2nd argument for render method
    // because we dont need any variables
    res.render('login');
});


////////////////////////////

router.get('/quiz', authMiddleware, (req, res) => {


    Question.findAll({
        include: 
            {model: Options}
        

    }).then(dbQuestionData => {
        
        const questions = dbQuestionData.map(question => question.get({ plain:true}));
        
        res.render ('quiz', {questions, loggedIn:req.session.loggedIn});
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    
    
});

/////////////////////////////

router.get('/results1', authMiddleware, (req, res) => {

    res.render('results1', {loggedIn:req.session.loggedIn});

})

router.get('/results2', authMiddleware, (req, res) => {

    res.render('results2', {loggedIn:req.session.loggedIn});

})

router.get('/results3', authMiddleware, (req, res) => {

    res.render('results3', {loggedIn:req.session.loggedIn});

})

router.get('/results4', authMiddleware, (req, res) => {

    res.render('results4', {loggedIn:req.session.loggedIn});

})

router.get('/contact', authMiddleware, (req, res) => {

    res.render('contact', {loggedIn:req.session.loggedIn});

})


router.get('/results', authMiddleware, (req, res) => {

    res.render('results', {loggedIn:req.session.loggedIn});

})


/////////////////////////////////

module.exports = router;