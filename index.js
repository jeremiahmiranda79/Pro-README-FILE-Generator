// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [
    {
        // project title
        type: 'input',
        name: 'title',
        message: 'Enter title name OR just press enter if N/A:'
    },
    {
        // description
        type: 'input',
        name: 'description',
        message: 'Enter a decription OR just press enter if N/A:'
    },
    {
        // installation instructions
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions OR just press enter if N/A:'
    },
    {
        // usage information
        type: 'input',
        name: 'usage',
        message: 'Enter usage information OR just press enter if N/A:'
    },
    // {
    //     // contribution guidelines
    //     type: 'input',
    //     name: 'contribution',
    //     message: 'Enter contribution guidelines OR just press enter if N/A:'
    // },
    {
        // gitHub username
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub user name OR just press enter if N/A:'
    },
    {
        // email address
        type: 'input',
        name: 'email',
        message: 'Enter your Email Address OR just press enter if N/A:'
    },
    {
        // test instructions
        type: 'input',
        name: 'test',
        message: 'Enter test instructions OR just press enter if N/A:'
    },
    {
        // choose a license for my application from a list of options
        type: 'list',
        name: 'license',
        message: 'Choose a lisence:',
        choices: [
            'none', 
            'Apache Liscense 2.0',
            'GNU General public License v3.0', 
            'MIT License', 
            'BSD 2-Clause "simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0',
            'Eclipse Public License 1.0',
            'GNU Lesser General Public License v3',
            'Mozilla Public License 2.0',
            'The Unlicense']
    },
    {
        // choose as many tool badges from a checkbox of options
        type: 'checkbox',
        name: 'badges',
        message: 'Choose as many badges as you need:',
        choices: [
            'javascript', 
            'html',
            'css',
            'bootstrap',
            'nodejs', 
            'react', 
            'jquery', 
            'express', 
            'mysql', 
            'mongo-db', 
            'microsoft-sql-server', 
            'maria-db',
            'nodemon',
            'google-chrome',
            'insomnia',
            'npm',
            'heroku',
            'visual-studio',
            'windows-11',
            'github',
            'git',
            'github-pages' 
        ]
    },
];

// write README file
function writeToFile(fileName, data) {
    const myData = generateMarkdown(data);
    fs.writeFile(fileName, myData, (error) => error ? console.log(error) : console.log('Success!'));
}

// initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', answers);
    })
}

// initialize app
init();