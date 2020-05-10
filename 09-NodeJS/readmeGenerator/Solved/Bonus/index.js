const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "desc",
      message: "What is your project description?",
    },
    {
      type: "input",
      name: "install",
      message: "Please enter the project's installation",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the project's usage?",
    },
    {
      type: "input",
      name: "license",
      message: "What is the project's license?",
    },
    {
      type: "input",
      name: "contributers",
      message: "Who are your contributers?",
    },
    {
      type: "input",
      name: "tests",
      message: "Please enter your tests",
    },
    {
      type: "input",
      name: "questions",
      message: "Please enter any questions",
    },
  ]);
}

function generateHTML(data) {
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

async function init() {
  console.log("Welcome")
  try {
    const answers = await promptUser();

    const data = generateHTML(answers);

    await writeFileAsync("index.html", data);

    console.log("Successfully wrote to index.html");
  } catch(err) {
    console.log(err);
  }
}

init();
