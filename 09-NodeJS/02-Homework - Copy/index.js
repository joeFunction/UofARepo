const prompt = require("inquirer").createPromptModule();
const fs = require("fs");
const api = require("./utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown");



const questions = [
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
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName + ".md", data, (err) => {
    if (err) throw err;
    console.log(`${fileName + ".md"} generated!`);
  });
}

async function init() {
  let readMe = {};
  do {
    const { userName, repoName } = await prompt([
      {
        type: "input",
        name: "userName",
        message: "Please enter your user name",
      },
      {
        type: "input",
        name: "repoName",
        message: "Please enter your repository name",
      },
    ]);
    readMe = await api.getUser(userName, repoName);

    if (!readMe) {
      console.error("Repository not found!");
    } else {
      console.log(`${readMe.path} found!`);
    }
  } while (!readMe);
  Object.assign(readMe, await prompt(questions));
  writeToFile(readMe.title, await generateMarkdown(readMe));
}

init();


