const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username'
  },
  {
    type: 'input',
    message: 'What is the name of the repository?',
    name: 'repo'
  },
  {
    type: 'input',
    message: 'Please write a description of your project.',
    name: 'description'
  },
  {
    type: 'input',
    message: 'What technologies are used in the project?',
    name: 'technologies'
  },
  {
    type: 'input',
    message: 'What does the user need to know about installing this project?',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'Please note any credits you would like noted for the project',
    name: 'credits'
  },
  {
    type: 'input',
    message: 'What type of license will this project use?',
    name: 'license'
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
