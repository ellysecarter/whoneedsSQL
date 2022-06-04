const { Question } = require('../models');

const questionsData = [
    {
        question: 'What kind of food do you want to eat on your vacation?'
    },
    {
        question: 'What kind of weather do you like?'
    },
    {
        question: 'What would you like to see on your trip?'
    },
    {
        question: 'How do you like your accommodations?'
    },
    {
        question: "What are we sippin on this vacation?"
    }]

const seedQuestions = () => Question.bulkCreate(questionsData);

module.exports = seedQuestions;