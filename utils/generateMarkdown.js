// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(badge) {
 }

  
  // [, ,, 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) { 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![${data.title}](https://img.shields.io/static/v1?label=license&message=${data.license}&color=FFADAD&logo=GitHub&logoColor=FFADAD&style=flat)
 
  ![GitHub code size](https://img.shields.io/github/languages/code-size/${data.username}/${data.title}?color=FFD6A5&logo=GitHub&logoColor=FFD6A5&style=flat)  

  ![GitHub top language](https://img.shields.io/github/languages/top/${data.username}/${data.title}?color=FDFFB6&logo=GitHub&logoColor=FDFFB6&style=flat)  

  ![GitHub repo size](https://img.shields.io/github/repo-size/${data.username}/${data.title}?color=CAFFBF&logo=GitHub&logoColor=CAFFBF&style=flat)  

  ![GitHub followers](https://img.shields.io/github/followers/${data.username}?color=9BF6FF&logo=GitHub&logoColor=9BF6FF&style=flat)  

  ![GitHub language count](https://img.shields.io/github/languages/count/${data.username}/${data.title}?color=A0C4FF&logo=GitHub&logoColor=A0C4FF&style=flat) 


  ${data.username}  
  ${data.email}


  See the project live here:
  [Deployed application](${data.liveURL})

      
  ## Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

  ## Description
  ${data.description}
      
  #### Technologies Used
  ${data.technologies}
      
      
  ## Installation
  ${data.installation}
      

  ## Usage
  Screenshot of application in use
  ![${data.title}](${data.screenshotURL})
      

  ## License
  ${data.license}

        
  ## Contributing
  ${data.contributing}   
  
  #### Credits
  ${data.credits}  


  ## Tests
  ${data.tests}   


  ## Questions
  For questions about this project, I can be reached at:
  ${data.email}   
`;
}
module.exports = generateMarkdown;