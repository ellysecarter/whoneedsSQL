const router = require('express').Router();

const { Question } = require('../../models');
///////////////////////////////////////////

// GET request for api/questions/ endpoint
router.get('/', (req, res) => {
    
    Question.findAll({
    })
        .then(dbQuestionData => res.json(dbQuestionData))
        .catch(err => {

            console.log(err);

            res.status(500).json(err);

        });

});

////////////////////////////////////////////


// GET request for questions by id 
router.get('/:id', (req, res) => {
    
    Question.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbQuestionData => res.json(dbQuestionData))
        .catch(err => {

            console.log(err);

            res.status(500).json(err);

        });

});

////////////////////////////////////////////

// POST request for api/questions/ endpoint
router.post('/', (req, res) => {
    
    Question.create({
        name : req.body.name
    })
        .then(dbQuestionData => res.json(dbQuestionData))
        .catch(err => {

            console.log(err);

            res.status(500).json(err);

        });

});


//////////////////////////////////////////




// PUT request (update request) for question based on id
// remember this involves manipulating req.body as well as req.params
router.put('/:id', (req, res) => {

    
    Question.update(req.body, {

    
        where: {
            id: req.params.id
        }

    })
        .then(dbQuestionData => {

            // if no data is returned in our array, send 404
            if (!dbQuestionData[0]) {

                res.status(404).json({ message: 'No question found with this id' });
                
                return;
            }

            // send data as json
            res.json(dbQuestionData);
        })

            // if there's an error we will respond with 500 status
            .catch(err => {

                console.log(err);

                res.status(500).json(err);

            });
        
});




/////////////////////////////////////////////////////


// DELETE request for question based on id
router.delete('/:id', (req, res) => {

    // we use destroy method from Sequelize's model class
    // pass in object as argument, specify id as req.params.id
    Question.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbQuestionData => {
            // if there is no data, send 404 status
            if (!dbQuestionData) {

                res.status(404).json({ message: 'No question found with this id' });
                
                return;
            }
            // send data as json
            res.json(dbQuestionData);
        })
        // if there's an error respond with 500 status
        .catch(err => {
            
            console.log(err);
            
            res.status(500).json(err);
        });
});


////////////////////////////////////////////////////
module.exports = router;