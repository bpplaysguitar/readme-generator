// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const util = require('util')
const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
      [
        {
          type: 'input',
          message: 'What is your GitHub username?',
          name: 'username'
        },
        {
          type: 'input',
          message: 'What is the title of the repository?',
          name: 'title'
        },
        {
          type: 'input',
          message: 'Please enter the URL of the live project website',
          name: 'liveURL'
        },
        {
          type: 'input',
          message: 'Please write a description of your project.',
          name: 'description'
        },
        {
          type: 'input',
          message: 'Please enter the URL of a screenshot of gif of your application in use.',
          name: 'screenshotURL'
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
          type: 'list',
          message: 'What type of license will this project use?',
          choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License','BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
          name: 'license'
        }
      ]
    )
      .then((response) => writeFileAsync('README.md', generateMarkdown(response)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
      }

// Function call to initialize app
init();
