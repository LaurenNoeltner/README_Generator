// function to generate markdown for README
function generateMarkdown(data) {
  return `![License](https://img.shields.io/badge/License-${data.license}-red)
  
  ## Title
  ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents :
  [Title](#Title)
  [Description](#Description)
  [Installation](#Installation)
  [Usage](#Usage)
  [License](#License) 
  [Contributors](#Contributors) 
  [Test](#Test)
  [Questions](#Questions)

  ## Installation: 
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under the ${data.license} license.

  ## Contributors
  ${data.contributors}

  ## Test
  Use this command to initiate the program: "${data.tests}"

  ## Questions
  You can ask questions at: ${data.questions}

`;
}

module.exports = generateMarkdown;
