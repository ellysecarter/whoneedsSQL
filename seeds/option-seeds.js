const { Options } = require('../models');

const optionsData = [
    {
        option: 'I like tacos',
        question_id: 1   
    },
    {
        option: 'I like sushi',
        question_id: 1   
    },
    {
        option: 'I like pasta',
        question_id: 1   
    },
    {
        option: 'I like burgers',
        question_id: 1   
    },
    {
        option: 'I like it hot!',
        question_id: 2   
    },
    {
        option: 'I like it cold!',
        question_id: 2   
    },
    {
        option: 'I like it tropical!',
        question_id: 2   
    },
    {
        option: 'I like it rainy!',
        question_id: 2   
    },
    {
        option: 'I want to see the city lights',
        question_id: 3   
    },
    {
        option: 'I want to see the mountains',
        question_id: 3   
    },
    {
        option: 'I want to see the ocean',
        question_id: 3   
    },
    {
        option: "I'd like to see the rainforests",
        question_id: 3   
    },
    {
        option: 'A 5-star resort',
        question_id: 4   
    },
    {
        option: 'A nice hotel',
        question_id: 4   
    },
    {
        option: 'Hostels',
        question_id: 4   
    },
    {
        option: 'Air BnBs',
        question_id: 4   
    },
    {
        option: 'Margarita',
        question_id: 5
    },
    {
        option: 'Wine',
        question_id: 5
    },
    {
        option: 'Beer',
        question_id: 5
    },
    {
        option: 'Sake',
        question_id: 5
    },
    {
        option: "I don't drink!",
        question_id: 5
    }]

const seedOptions = () => Options.bulkCreate(optionsData);

module.exports = seedOptions;