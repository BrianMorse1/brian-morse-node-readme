// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = 

inquirer
    .prompt([
    {
    type: 'input', 
    name: 'title',   
    message: 'What is the title of your project?'
    },
      
    {
    type: 'input', 
    name: 'description',   
    message: 'Please provide a detailed description of your project.'
    }, 
    
    {
        type: 'input', 
        name: 'installation',   
        message: 'Please provide detailed installation instruction for your project.'
    },
    
    {
        type: 'input', 
        name: 'usage information',   
        message: 'What is the intended way for your project to be used?'
    },

    {
        type: 'input', 
        name: 'contribution guidelines',   
        message: 'What are the guidelines for contributing to this project?'
    },

    {
        type: 'input', 
        name: 'test instructions',   
        message: 'What are the test instructions for this project? Consider including information about dependencies, specific environment instructions, expected outcomes of project use, and troubleshooting tips.'
    },

    {
        type: 'list', 
        name: 'license',   
        message: 'Which license are you using for your project?',
        choices: ['Apache', 'MIT', 'BSD', 'GNU', 'Unlicensed']
    },  
]);

// TODO: Create a function to write README file

function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
