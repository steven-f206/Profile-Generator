const inquirer = require("inquirer");
const createPdf = require('./createPdf').createPdf;
const gitHubProfile = require('./gitHubProfile.js').gitHubProfile;

colorQuestion = () => {
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
      // Step 2. Used data passed to gitHubDataCall from the colorQuestion function to make a request to gitHubProfile.
      // From here it will pass it's own data to createPdf to fulfill it's step.
      gitHubProfile(answers,createPdf);
  })
}

module.exports.colorQuestion = colorQuestion