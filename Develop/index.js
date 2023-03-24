// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create an array of questions for user input
// constant containing the questions
const questions = [
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
        name: 'usage',   
        message: 'What is the intended way for your project to be used?'
    },

    {
        type: 'input', 
        name: 'contribution',   
        message: 'What are the guidelines for contributing to this project?'
    },

    {
        type: 'input', 
        name: 'test',   
        message: 'What are the test instructions for this project? Consider including information about dependencies, specific environment instructions, expected outcomes of project use, and troubleshooting tips.'
    },

    {
        type: 'list', 
        name: 'license',   
        message: 'Which license are you using for your project?',
        choices: ['Apache', 'MIT', 'BSD', 'GNU', 'Unlicensed']
    },  

    {
        type: 'input', 
        name: 'github',   
        message: 'Please provide a link to your public GitHub account:'
    },
    {
        type: 'input', 
        name: 'email',   
        message: 'Please provide an email address to list in the readme:'
    }
]

// TODO: Create a function to write README file

const generateReadme = data => {
    const {title, description, installation, usage, contribution, test, license, github, email} = data;
    
    const readme = `
    # ${title}
        
    ## Description
    ${description}

    ## Table of Contents
    - [Installation](#installation)

    - [Usage](#usage)

    - [Contributing](#contribution)

    - [Tests](#tests)

    - [License](#license)

    
    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## Testing this app
    ${test}

    ## Contributing
    ${contribution}

    ## License
    This project uses the ${license} license. 

    ## Questions
    For any quesitions regarding this project, please see my Github at ${github} or email me at ${email}. 
    `;
    fs.writeFile('README.md', readme, (err) =>
        err ? console.error(err) : console.log('README.md successfully created!')
        );
};



// TODO: Create a function to initialize app
const initApp = () => {
    inquirer.prompt(questions).then(generateReadme);
};

// Function call to initialize app
initApp();
