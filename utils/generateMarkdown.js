


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let license = data.license;
  let licenseLink = license;
  let licenseBadge;

  switch (licenseLink) {
    case 'Apache License 2.0':
      licenseLink = `<a href="https://choosealicense.com/licenses/apache-2.0/">Read about the Apache License 2.0</a>`;
      licenseBadge = ``
      break;

    case 'GNU General Public License v3.0':
      licenseLink = `<a href="https://choosealicense.com/licenses/gpl-3.0/">Read about the GNU General Public License v3.0 license</a>`;
      licenseBadge = ``
      break;

    case 'MIT License ':
      licenseLink = `<a href="https://choosealicense.com/licenses/gpl-3.0/">Read about the MIT License</a>`;
      licenseBadge = ``
      break;

    case 'BSD 2-Clause "Simplified" License':
      licenseLink = `<a href="https://choosealicense.com/licenses/gpl-3.0/">Read about the BSD 2-Clause "Simplified" License</a>`;
      licenseBadge = ``
      break;

    case 'BSD 3-Clause "New" or "Revised" License':
      licenseLink = `<a href="https://opensource.org/licenses/BSD-3-Clause">Read about the BSD 3-Clause "New" or "Revised" License</a>`;
      licenseBadge = ``
      break;

    case 'Boost Software License 1.0':
      licenseLink = `<a href="https://www.boost.org/LICENSE_1_0.txt">Read about the Boost Software License 1.0</a>`;
      licenseBadge = ``
      break;

    case 'Eclipse Public License 2.0':
      licenseLink = `<a href="https://opensource.org/licenses/EPL-2.0">Eclipse Public License 2.0</a>`;
      licenseBadge = ``
      break;
    
      case 'GNU Affero General Public License v3.0':
      licenseLink = `<a href="https://www.gnu.org/licenses/agpl-3.0">Read about the GNU Affero General Public License v3.0</a>`;
      licenseBadge = ``
      break;
    
      case 'GNU General Public License v2.0':
      licenseLink = `<a href="https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html">Read about the GNU General Public License v2.0</a>`;
      licenseBadge = ``
      break;
      
    case 'GNU Lesser General Public License v2.1':
      licenseLink = `<a href="https://www.gnu.org/licenses/lgpl-3.0">Read about the GNU Lesser General Public License v2.1</a>`;
      licenseBadge = ``
      break;

    case 'Mozilla Public License 2.0':
      licenseLink = `<a href="https://opensource.org/licenses/MPL-2.0">Read about the Mozilla Public License 2.0</a>`;
      licenseBadge = `MPL%202.0`
      break;  

    case 'The Unlicense':
      licenseLink = `<a href="http://unlicense.org/">Read about The Unlicense</a>`;
      licenseBadge = `Unlicense`
      break;  
      }



  return `# ${data.title}

  ![${data.title}](https://img.shields.io/static/v1?label=license&message=${licenseBadge}&color=FFADAD&logo=GitHub&logoColor=FFADAD&style=flat)
 
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
  ${licenseLink}
        
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