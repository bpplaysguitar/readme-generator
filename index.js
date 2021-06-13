const inquirer = require('inquirer');
const fs = require('fs');

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
    message: 'Please enter the URL of the live project website',
    name: 'liveurl'
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
    type: 'list',
    message: 'What type of license will this project use?',
    choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License','BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    name: 'license'
  },
];

inquirer
.prompt(questions)
.then(data => {
  fileName = `${data.username.split(' ').join('')}.md`;

  fs.writeFile(
    fileName,
    JSON.stringify(
    `##${data.repo}
    See the project live here:

    https://${data.username}.github.io/${data.repo}/

    ![GitHub code size](https://img.shields.io/github/languages/code-size/${data.username}/${data.repo}?color=FF0000&logo=GitHub&logoColor=FF0000&style=for-the-badge) 

    ![GitHub top language](https://img.shields.io/github/languages/top/${data.username}/${data.repo}?color=FF7F00&logo=GitHub&logoColor=FF7F00&style=for-the-badge)
    
    ![GitHub repo size](https://img.shields.io/github/repo-size/${data.username}/${data.repo}?color=FFFF00&logo=GitHub&logoColor=FFFF00&style=for-the-badge)
    
    ![GitHub followers](https://img.shields.io/github/followers/${data.username}?color=00FF00&logo=GitHub&logoColor=00FF00&style=for-the-badge)
    
    ![GitHub language count](https://img.shields.io/github/languages/count/${data.username}/${data.repo}?color=0000FF&logo=GitHub&logoColor=0000FF&style=for-the-badge)
    
    ![GitHub license](https://img.shields.io/github/license/${data.username}/${data.repo}?color=2E2B5F&logo=GitHub&logoColor=2E2B5F&style=for-the-badge)
    
    ![GitHub repo stars](https://img.shields.io/github/stars/${data.username}/${data.repo}?color=8B00FF&logo=GitHub&logoColor=8B00FF&style=for-the-badge)
    
    ## Description
    ${data.description}
    

    ## Technologies Used
    ${data.technologies}
    
    
    ## Installation
    ${data.installation}
    
    ## Usage
    
    Animation of application in use
    
    ![](assets/images/professional-development-portfolio.gif)
    
    
    ## Credits
    ${data.credits}
    

    ## License
    ${data.license}
    `, null, '\t'),



    err => err ? console.log(err) : console.log('Sucess!'));


});
// .then((response) =>
//     response.username === response.repo
//       ? console.log('user and repo are the same')
//       : console.log('user and repo are different words')
//   );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  //use the response._____ to fill in fields in the README.md
  // use append to write




}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
