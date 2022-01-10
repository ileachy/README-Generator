var fileGen = require("./fileGen");
var fs = require("fs");
var inquirer = require("inquirer");

// Questions //
let questions = [
  {
    type: "input",
    message: "What is the title of your repository?",
    name: "title",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "install",
  },
  {
    type: "input",
    message: "What is your GitHub user name?",
    name: "userName",
  },
  {
    type: "input",
    message: "What is your GitHub profile link?",
    name: "GitHub",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license.",
    choices: ["APACHE", "BSD 3", "GVL-GPL 3.0", "MIT", "None"],
  },
  {
    type: "input",
    message: "Describe your repository.",
    name: "description",
  },
  {
    type: "input",
    message: "What is the use of your repository?",
    name: "usage",
  },
  {
    type: "input",
    message: "Can anyone contribute?",
    name: "contribute",
  },
  {
    type: "input",
    message: "Please state any test(s) required.",
    name: "test",
  },
  {
    type: "input",
    message: "Provide any screenshot(s).",
    name: "index",
  },
];

// create file //
inquirer.prompt(questions).then(function (response) {
  console.log(response);

  var content = fileGen(response);
  console.log(content);
  fs.writeFile("./ReadMe.md", content, function (err) {
    if (err) throw err;
    console.log("success");
  });
});
