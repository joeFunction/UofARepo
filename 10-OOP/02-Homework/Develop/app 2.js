const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let team = []
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Please type the manager name"
    },
    {
      type: "input",
      name: "id",
      message: "Please type the manager id"
    }, {
      type: "input",
      name: "email",
      message: "Please type the manager email"
    }, {
      type: "input",
      name: "officenumber",
      message: "Please type the manager office"
    },
    /* Pass your questions in here */
  ])
  .then(answers => {
    console.log(answers)
    team.push(new Manager(answers.name, answers.id, answers.email, answers.officenumber))
    console.log(team)
    menu()
  })
  .catch(error => {
    if (error.isError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      console.log('Error') // Something else when wrong
    }
  });


function menu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: 'Select a title.',
        choices: ["Intern", "Engineer", "buildHTML"]
      },
      /* Pass your questions in here */
    ])
    .then(answers => {
      console.log(answers)
      if (answers.choice === "Intern") {
        menuIntern()
        // you go to other inquirer asking for the data for the Int

      } else if (answers.choice === "Engineer") {
        menuEngineer()
        // you go to other inquierer asiking for the data for the Eng
      } else {

        console.log(team)
        let html = render(team)
        fs.writeFileSync("teamtest.html", render(team), "utf-8")
        console.log(html)
        /// you will create the html

      }


    })

}


function menuIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please type the Intern name"
      },
      {
        type: "input",
        name: "id",
        message: "Please type the Intern id"
      }, {
        type: "input",
        name: "email",
        message: "Please type the Intern email"
      }, {
        type: "input",
        name: "school",
        message: "Please type the Intern school "
      },
      /* Pass your questions in here */
    ])
    .then(answers => {
      console.log(answers)
      team.push(new Intern(answers.name, answers.id, answers.email, answers.school))
      console.log(team)
      menu()
    })

}

function menuEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please type the Engineer name"
      },
      {
        type: "input",
        name: "id",
        message: "Please type the Engineer id"
      },
      {
        type: "input",
        name: "email",
        message: "Please type the Engineer email"
      },
      {
        type: "input",
        name: "GitHub",
        message: "Please type the Engineers' GitHub username "
      },
      /* Pass your questions in here */
    ])
    .then(answers => {
      console.log(answers)
      team.push(new Engineer(answers.name, answers.id, answers.email, answers.school))
      console.log(team)
      menu()
    })

}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
