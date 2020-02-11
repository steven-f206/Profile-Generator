const puppeteer = require('puppeteer');
const generatePdfContent = require('./generatePdfContent.js/index.js');

// Step 4. Intructions to create PDF below utilizing the node puppeteer library
const createPdf = async (answers, gitHubInfo) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const options = {
    path: 'pdf/AndyDuretteGithubProfile.pdf',
    format:'A4'
};
  // Awaits content from the generatePdfContent
  await page.setContent(generatePdfContent.generatePdfContent(answers.color, gitHubInfo ));
  await page.pdf(options);
  await browser.close();
}

module.exports.createPdf = createPdf; 