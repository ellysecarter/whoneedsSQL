
// import models
const User = require ('./User.js')
const Options = require ('./Options.js')
const Question = require ('./Question.js')


////////////////////////////////////////////

// create associations here

Options.belongsTo(Question, {
    foreignKey: 'question_id'
});

Question.hasMany(Options, {
    foreignKey: 'question_id'
})


//////////////////////////////////////////////


// export all our models
module.exports = { User, Options, Question};