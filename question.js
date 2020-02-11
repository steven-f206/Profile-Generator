const inquirer = require("inquirer");

colorQuestion = (gitHubDataCall) => {
  inquirer
    .prompt([
      {
        type:"list",
        message:"Pick the color your would like to use.",
        name:"color",
        choices: ["green", "blue", "pink","red"]
      }
    ])
    .then(answers => {
      gitHubDataCall(answers);
  })
}

module.exports.colorQuestion = colorQuestion