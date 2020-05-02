
const generateMarkdown = require('./utils/generateMarkdown');

const fs = require('fs')

const inquirer = require('inquirer')

const path = require('path')

const questions = [
  {type: 'input',
  name: 'Title',
  message: 'Title?'},

  {type: 'input',
    name: 'Descripton',
    message: 'Discription?'},

  {type: 'input',
    name: 'Table of Contents',
    message: 'Table of Contents'},

  {type: 'input',
    name: 'Installation',
    message: 'Installation'},

  {type: 'input',
    name: 'Usuage',
    message: 'Usage'},

  {type: 'input',
    name: 'License',
    message: 'License' },

  {type: 'list',
    name: 'Contributing',
    message: 'Contributing?',
    choices: ['placeholder', 'placeholder', 'placeholder']
  },
  {type: 'input',
    name: 'Test',
    message: 'Test' },

  {type: 'input',
    name: 'Questions',
    message: 'Questions' },

];


function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
  inquirer.prompt(questions).then((responses) => {
    writeToFile('fileName.md', generateMarkdown(responses))
  })
}

init();
