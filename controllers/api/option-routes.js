const router = require('express').Router();

const { Options } = require('../../models');

///////////////////////////////////////////

// GET request for api/options/ endpoint
router.get('/', (req, res) => {
    
    Options.findAll({
    })
        .then(dbOptionsData => res.json(dbOptionsData))
        .catch(err => {

            console.log(err);

            res.status(500).json(err);

        });

});

////////////////////////////////////////////


// GET request for questions by id 
router.get('/:id', (req, res) => {
    
    Options.findOne({
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


//////////////////////////////////////////////


// POST request for api/options/ endpoint
router.post('/', (req, res) => {
    
    Options.create({
        name : req.body.name,
        question_id: req.body.question_id
    })
        .then(dbOptionsData => res.json(dbOptionsData))
        .catch(err => {

            console.log(err);

            res.status(500).json(err);

        });

});


////////////////////////////////////////////////////////////////////////////////////





// PUT request (update request) for option based on id
// remember this involves manipulating req.body as well as req.params
router.put('/:id', (req, res) => {

    
    Options.update(req.body, {

    
        where: {
            id: req.params.id
        }

    })
        .then(dbOptionData => {

            // if no data is returned in our array, send 404
            if (!dbOptionData[0]) {

                res.status(404).json({ message: 'No option found with this id' });
                
                return;
            }

            // send data as json
            res.json(dbOptionData);
        })

            // if there's an error we will respond with 500 status
            .catch(err => {

                console.log(err);

                res.status(500).json(err);

            });
        
});




/////////////////////////////////////////////////////


// DELETE request for option based on id
router.delete('/:id', (req, res) => {

    // we use destroy method from Sequelize's model class
    // pass in object as argument, specify id as req.params.id
    Options.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbOptionData => {
            // if there is no data, send 404 status
            if (!dbOptionData) {

                res.status(404).json({ message: 'No option found with this id' });
                
                return;
            }
            // send data as json
            res.json(dbOptionData);
        })
        // if there's an error respond with 500 status
        .catch(err => {
            
            console.log(err);
            
            res.status(500).json(err);
        });
});


////////////////////////////////////////////////////


module.exports = router;