const seedOptions = require('./option-seeds');
const seedQuestions = require('./question-seeds');
const seedUsers = require('./user-seeds');


const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({ force: true });

    console.log('\n----- DATABASE SYNCED -----\n');
    

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');


    await seedQuestions();
    console.log('\n----- QUESTIONS SEEDED -----\n');
  
    
    await seedOptions();
    console.log('\n----- OPTIONS SEEDED -----\n');
    
    
  
    process.exit(0);
};
  
seedAll();

