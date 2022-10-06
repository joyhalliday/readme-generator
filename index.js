// TODO: Include packages needed for this application

const inquirer = require(`inquirer`);
const { writeToFile } = require('fs').promises;

// TODO: Create an array of questions for user input 
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input', 
        name: 'title',
        message: 'Enter title display.'
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Enter table of Contents.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your application.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter an installation description.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter a usage description',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contributer name(s).',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test information.',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter any questions.',
    },
]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
