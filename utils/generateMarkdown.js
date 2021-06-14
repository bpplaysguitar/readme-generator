// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.username}  
  ${data.email}


  See the project live here:
  [Deployed application](${data.liveURL})

  ![GitHub code size](https://img.shields.io/github/languages/code-size/${data.username}/${data.title}?color=FF0000&logo=GitHub&logoColor=FF0000&style=for-the-badge)  

  ![GitHub top language](https://img.shields.io/github/languages/top/${data.username}/${data.title}?color=FF7F00&logo=GitHub&logoColor=FF7F00&style=for-the-badge)  

  ![GitHub repo size](https://img.shields.io/github/repo-size/${data.username}/${data.title}?color=FFFF00&logo=GitHub&logoColor=FFFF00&style=for-the-badge)  

  ![GitHub followers](https://img.shields.io/github/followers/${data.username}?color=00FF00&logo=GitHub&logoColor=00FF00&style=for-the-badge)  

  ![GitHub language count](https://img.shields.io/github/languages/count/${data.username}/${data.title}?color=0000FF&logo=GitHub&logoColor=0000FF&style=for-the-badge)  

  ![GitHub license](https://img.shields.io/github/license/${data.username}/${data.title}?color=2E2B5F&logo=GitHub&logoColor=2E2B5F&style=for-the-badge)  

  ![GitHub repo stars](https://img.shields.io/github/stars/${data.username}/${data.title}?color=8B00FF&logo=GitHub&logoColor=8B00FF&style=for-the-badge)  

      
  ## Table of contents
* [Description](#description)
* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

  ## Description
  ${data.description}
      

  ## Technologies Used
  ${data.technologies}
      
      
  ## Installation
  ${data.installation}
      

  ## Usage
  Screenshot of application in use
  ![${data.title}](${data.screenshotURL})
      
      
  ## Credits
  ${data.credits}
      

  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
