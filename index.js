const puppeteer = require('puppeteer');
const pdfContent = require('./generateHTML.js');
const gitHubProfile = require('./gitHubProfile.js');
const questions = require('./question.js');

// Create PDF
const createPdf = async (answers, gitHubInfo) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const options = {
    path: 'pdf/StevenFerreiraGithubProfile.pdf',
    format:'A4'
};
  await page.setContent(pdfContent.generateHTML(answers.color, gitHubInfo ));
  await page.pdf(options);
  await browser.close();
}

// Call data for PDF
let gitHubDataCall = (answers) => {
  gitHubProfile.gitHubProfile(answers,createPdf);
}

questions.colorQuestion(gitHubDataCall);

/*
function init() {}
init();
*/