// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require(`inquirer`);
const generateMarkdown = require('./generateMarkdown');
const { writeToFile } = require('fs').promises;

// TODO: Create an array of questions for user input 
//const questions = () => {
    //return 
//inquirer.prompt(
    const questions =   [
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
        type: 'list',
        name: 'license',
        message: 'Select the license being used.',
        choices: ['MIT','Apache','GNU','Creative Commons','Eclipse','Mozilla','None'],
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
        name: 'question',
        message: 'Enter any questions.',
    }
];
function init() {
    inquirer.prompt(questions)
    .then((data) => {
    const readMeContent = generateMarkdown(data);
    fs.writeFile('README.md', readMeContent, (err) =>
        err ? console.log(err) : console.log('Created README.md!')
    );
    // .then((data) => {
    //     console.log(data);
    // .then((data) => writeToFile('README.md', generateMarkdown(data))));

    });
};

init();

//}
// .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeToFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//     err ? console.log(err) : console.log('Success!')
//     );
// });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
//