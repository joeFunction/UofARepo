function generateMarkdown(data) {
  console.log(data);
  return `
  <img src="${data.avatar}">
  # ${data.title}
  Repo by ${data.name}
  
  ![GitHub repo size](https://img.shields.io/github/repo-size/${data.path})
  

  # Table of Contents
  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [License](#License)
  5. [Contributing](#Contributing)
  6. [Tests](#Tests)
  7. [Questions](#Questions)


  
  
  ## Description

  ${data.desc}


  ## Installation

  ${data.install}


  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributing

  ${data.contributers}


  ## Tests

  ${data.tests}

  ## Questions

  ${data.questions}
  
`;
}

module.exports = generateMarkdown;
