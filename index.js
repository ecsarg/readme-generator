// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const promptQuestions = questions => {
    if (!questions.projects) {
    const questions = [];
    }
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
            name: 'contribution',
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
            message: 'Choose a license for your project from the list below'
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
    .then(projectData => {
        questions.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptQuestions(questions);
        } else {
            return questions;
        }
    })
};

promptQuestions()
    .then(writeToFile)
    .then(questions => {
        console.log(questions);
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
