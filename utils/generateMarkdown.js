


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