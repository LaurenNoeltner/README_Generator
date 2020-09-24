const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
const questionList = [
  { type: "input", message: "What is the title?", name: "title" },
  { type: "input", message: "Describe your project:", name: "description" },
  {
    type: "input",
    message: "How do you install your program?",
    name: "install",
  },
  {
    type: "input",
    message: "How can your project be used by others?",
    name: "usage",
  },
  {
    type: "checkbox",
    message: "Pick one license for your project:",
    name: "license",
    choices: ["MIT", "GNU_GPLv3", "Apache2.0", "Mozilla_Public_License2.0"],
  },
  {
    type: "input",
    message: "Who contributed to this project?",
    name: "contributors",
  },
  {
    type: "input",
    message: "What command do you want to run to test this program?",
    name: "tests",
  },
  {
    type: "input",
    message: "Where can I ask questions about this program (email/URL)?",
    name: "questions",
  },
];
inquirer
  .prompt(questionList)
  .then(function (response) {
    console.log(response);
    const markdownString = generateMarkdown(response);

    writeFileAsync("readme.md", markdownString)
      .then(() => {
        console.log("Successfully wrote file.");
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

// function generateMarkdown(response) {
//   return `
//   ## ${response.title}
//   `;
// }

// let responses = [];

// for (let i = 0; i < questionList.length; i++) {
//   inquirer.prompt(...questionList[i]).then.waitFor(response) {
//       console.log(response);
//   }};
//   inquirer.then(function (response) {
//     responses.push(response);
//   });

// function to write README file
// function writeToFile(myFile, response) {}

// // function to initialize program
// function init() {}

// // function call to initialize program
// init();

// inquirer
//   .prompt([
//     { type: "input", message: "What is the title?", name: "title" },
//     { type: "input", message: "Describe your project:", name: "description" },
//   ])
//   .then(function (response) {
//     fs.writeFile("", response);
//   });
