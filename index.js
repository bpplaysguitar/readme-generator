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
          message: 'What is your email address?',
          name: 'email'
        },
        {
          type: 'input',
          message: 'What is the title of the repository?',
          name: 'title'
        },
        {
          type: 'input',
          message: 'Please enter the URL of the live project website (make sure to include "https://").',
          name: 'liveURL'
        },
        {
          type: 'input',
          message: 'Please write a description of your project.',
          name: 'description'
        },
        {
          type: 'input',
          message: 'Please enter the URL of a screenshot or gif of your application in use.',
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
          message: 'What do people need to know about contributing to the project?',
          name: 'contributing'
        },
        {
          type: 'input',
          message: 'Please write any credits you would like noted for the project.',
          name: 'credits'
        },
        {
          type: 'input',
          message: 'What tests were done to ensure the quality of the application?',
          name: 'tests'
        },
        {
          type: 'list',
          message: 'What type of license will this project use?',
          choices: ['Apache2.0', 'GPLv3', 'MIT', 'BSD_2-Clause', 'BSD_3-Clause', 'Boost1.0', 'EPL2.0', 'AGPLv3', 'GPLv2', 'LGPLv2.1', 'MPL2.0', 'Unlicense'],
          name: 'license'
        }
      ]
    )
      .then((response) => writeFileAsync('./demo/README.md', generateMarkdown(response)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
      }

      // let licenseLink;

      // if (response.license = 'Apache2.0') {
      //   licenseLink = 'https://opensource.org/licenses/Apache-2.0'
      // } else if (response.license = 'GPLv3') {
      //   licenseLink = 'https://www.gnu.org/licenses/gpl-3.0'
      // } else if (response.license = 'MIT') {
      //   licenseLink = 'https://opensource.org/licenses/MIT'
      // } else if (response.license = 'BSD_2-Clause') {
      //   licenseLink = 'https://opensource.org/licenses/BSD-2-Clause'
      // } else if (response.license = 'BSD_3-Clause') {
      //   licenseLink = 'https://opensource.org/licenses/BSD-3-Clause'
      // } else if (response.license = 'Boost1.0') {
      //   licenseLink = 'https://www.boost.org/LICENSE_1_0.txt'
      // } else if (response.license = 'EPL2.0') {
      //   licenseLink = 'https://opensource.org/licenses/EPL-2.0'
      // } else if (response.license = 'AGPLv3') {
      //   licenseLink = 'https://www.gnu.org/licenses/agpl-3.0'
      // } else if (response.license = 'GPLv2') {
      //   licenseLink = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
      // } else if (response.license = 'LGPLv2.1') {
      //   licenseLink = 'https://www.gnu.org/licenses/lgpl-3.0'
      // } else if (response.license = 'MPL2.0') {
      //   licenseLink = 'https://opensource.org/licenses/MPL-2.0'
      // } else {
      //   licenseLink = 'http://unlicense.org/'
      // }

// Function call to initialize app
init();
