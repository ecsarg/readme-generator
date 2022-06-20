// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = () => {
    //if (!questions.projects) {
    // const questions = [];
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the title of your project'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter installation instructions for your project'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage information for your project'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please enter contribution guidelines for your project'
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Please enter test instructions here'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose a license for your project from the list below',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please enter your GitHub username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address'
        }
    ])
};

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
const writeToFile = data => {
   fs.writeFile('./README.md', data, err => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('README created!')
    }
   })
};

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions)
    .then(writeToFile)
    .then(responses => {
        return generatePage(responses)
    })
};

// Function call to initialize app
init();
// .then(responses => {
//     return generatePage(responses);
// })
// .then(data => {
//     return writeToFile(data);
// })
// .catch(err => {
//     console.log(err)
// })
