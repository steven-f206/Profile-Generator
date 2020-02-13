const puppeteer = require('puppeteer');
const generatePdfContent = require('./generatePdfContent').generatePdfContent;

// Step 4. Intructions to create PDF below utilizing the node puppeteer library
const createPdf = async (answers, gitHubInfo) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const options = {
    path: 'pdf/StevenFerreiraGithubProfile.pdf',
    format:'A4'
};
  // Awaits content from the generatePdfContent
  await page.setContent(generatePdfContent(answers.color, gitHubInfo ));
  await page.screenshot({ path: 'screenshot/output.png' });
  await page.pdf(options);
  await browser.close();
}

module.exports.createPdf = createPdf; 