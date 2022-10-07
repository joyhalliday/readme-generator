// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## TITLE
  # ${data.title} 
  ## TABLE OF CONTENTS 
  # ${data.contents}
  ## DESCRIPTION
  # ${data.description}
  ## INSTALLATION
  # ${data.installation}
  ## USAGE
  # ${data.usage}
  ## LICENSE
  # ${data.license}
  ## CONTRIBUTING
  # ${data.contributing}
  ## TESTS
  # ${data.tests}
  ## QUESTIONS
  # ${data.question}`;
}

module.exports = generateMarkdown;


