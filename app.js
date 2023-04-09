const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title',
    },
    {
        type: 'input',
        name: 'descrition',
        message: 'Project description?',
    },
    {
        type: 'input',
        name: 'instaltion',
        message: 'Installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project usage?',
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'Project description?',
    },
]