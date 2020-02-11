const gitHubProfile = require('./modules/gitHubProfile.js');
const colorQuestion = require('./modules/colorQuestion.js');
const createPdf = require('./modules/createPdf');

// Step 2. Used data passed to gitHubDataCall from the colorQuestion function to make a request to gitHubProfile.
// From here it will pass it's own data to createPdf to fulfill it's step.
let gitHubDataCall = (answers) => {
    gitHubProfile.gitHubProfile(answers,createPdf.createPdf);
}

function init() {
    // Step 1. Make initial call for choice of color
    colorQuestion.colorQuestion(gitHubDataCall);
  }

init();