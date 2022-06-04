const { User } = require('../models');

const userData = [
    {
        username: 'testuser',
        email: 'testemail@test.com',
        password: 'password123'
    }]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;