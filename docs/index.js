const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, installation, usage, credits, tests, license, github, email }) =>
`# ${title}

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

## License

${license}

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
        type: 'input',
        name: 'license',
        message: 'Please choose a license.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username.',
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