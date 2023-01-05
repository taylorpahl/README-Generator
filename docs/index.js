const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, installation, usage, credits, tests, license, github, repo, email }) =>
`![${license}](https://img.shields.io/github/license/${github}/${repo})

# ${title}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## Tests

${tests}

## Questions

${github}
${email}

`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What are some examples for use of your project?',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Please list any collaborators or third-party assets that require attribution.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide an explanation of how to run tests for your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license.',
        choices: ['MIT', 'Apache License 2.0', 'GNU General Public License v3.0', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username.',
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Please enter your the name of your repository.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter yout email.',
    },
  ])
  .then((answers) => {
    const pageContent = generateREADME(answers);

    fs.writeFile('README.md', pageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });