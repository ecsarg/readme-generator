// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  }
  if (license === 'Apache 2.0') {
    return `https://opensource.org/licenses/Apache-2.0`
  }
  if (license === 'GPL 3.0') {
    return `https://www.gnu.org/licenses/gpl-3.0`
  }
  if (license === 'BSD 3') {
    return `https://opensource.org/licenses/BSD-3-Clause`
  }
  if (license === 'None') {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``
  } else {
    return `## License
    This project is licensed under ${data.license}.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation] (#installation)
  * [Usage] (#usage)
  * [License] (#license)
  * [Contributors] (#contributors)
  * [Tests] (#tests)
  * [Questions] (#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.test}

  ## Questions
  For any questions, please email directly to ${data.email}. You can view more at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
