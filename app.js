const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Project Title?',
    },
    {
        type: 'input',
        name: 'Descrition',
        message: 'Project Description?',
    },
    {
        type: 'input',
        name: 'Instaltion',
        message: 'Installation Instructions?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Project Usage?',
    }, 
    {
        type: 'input',
        name: 'Contributions',
        message: 'Contribution Info?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'For Questions(Email)?',
    },
    {
        type: 'input',
        name: 'Github',
        message: 'For Questions(GitHub)?',
    },
    {
        type: 'list',
        name: 'License',
        message: 'Licencse?',
        choices: ['MIT', 'Apache', 'GNPLv3'],
        filter(val) {
            return val.toLowerCase(); 
        }
    }, 
    
]