const inquirer = require('inquirer');
const fs = require("fs");
const MarkDown = require('./LIB/readMeGen.js')
// QUESTIONS PROMPTED IN TERMINAL
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Project Title?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Project Description?',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Installation Instructions?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Project Usage?',
    }, 
    {
        type: 'input',
        name: 'Contributing',
        message: 'Contribution Info?',
    },
    {
        type: 'input',
        name: 'testInstru',
        message: 'Test Instructions?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'For Questions(Email)?',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'For Questions(GitHub)?',
    },
    {
        type: 'list',
        name: 'License',
        message: 'License?',
        choices: ['MIT', 'Apache', 'GNPLv3'],
        filter(val) {
            return val.toLowerCase(); 
        }
    }
    
]

// RUN QUERRY FUNCTION
async function runList() {
    return inquirer.prompt(questions)
    .then((answers)=>{
        const mark = MarkDown.generateReadMe(answers)
        fs.writeFile('README.md', mark, function(err) {
             if(err){
                console.log('Could not save file')
             } else {
                console.log('Success!: New README.md file generated inside current folder')
             }
        })
    })
    .catch((error)=>{
        console.log(error)
    })
}

 runList()