


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseLink;

if (data.license = 'Apache2.0') {
  licenseLink = 'https://opensource.org/licenses/Apache-2.0'
} else if (data.license = 'GPLv3') {
  licenseLink = 'https://www.gnu.org/licenses/gpl-3.0'
} else if (data.license = 'MIT') {
  licenseLink = 'https://opensource.org/licenses/MIT'
} else if (data.license = 'BSD_2-Clause') {
  licenseLink = 'https://opensource.org/licenses/BSD-2-Clause'
} else if (data.license = 'BSD_3-Clause') {
  licenseLink = 'https://opensource.org/licenses/BSD-3-Clause'
} else if (data.license = 'Boost1.0') {
  licenseLink = 'https://www.boost.org/LICENSE_1_0.txt'
} else if (data.license = 'EPL2.0') {
  licenseLink = 'https://opensource.org/licenses/EPL-2.0'
} else if (data.license = 'AGPLv3') {
  licenseLink = 'https://www.gnu.org/licenses/agpl-3.0'
} else if (data.license = 'GPLv2') {
  licenseLink = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
} else if (data.license = 'LGPLv2.1') {
  licenseLink = 'https://www.gnu.org/licenses/lgpl-3.0'
} else if (data.license = 'MPL2.0') {
  licenseLink = 'https://opensource.org/licenses/MPL-2.0'
} else {
  licenseLink = 'http://unlicense.org/'
}



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