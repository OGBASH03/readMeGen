class MarkDown {
    //FUNCTION RENDERS LICENSE BADGES
    
    static renderLicenceCert(License){
        const badges = {
            mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            gnugplv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        }
        return badges[License]
    }

    //FUNCTION RENDERS LICENSE LINKS
    static renderLicenceLink(License){
        const linkLicenses = {
            mit: '[MIT](https://opensource.org/licenses/MIT)',
            apache: '[APACHE](https://opensource.org/licenses/Apache-2.0)',
            gnugplv3: '[GPL v3](https://www.gnu.org/licenses/gpl-3.0)'
        }

        return linkLicenses[License]
    }

    //FUNCTION RENDERS LICENSE LINK
    static sectionLicenseRender(License) {
        if(License){
            return `Licensed under the ${this.renderLicenceLink(License)} license`
        } else {
            return ''
        }
    }

//FUNCTION IN CHARGE OF TAKING ALL PARAMETERS FROM TERMINAL AND APLYING THEM ONTO THIS TEMPLATE
    static generateReadMe(answers){
    return `
# ${answers.Title}

${this.renderLicenceCert(answers.License)}

## Table of Content
- [Project descrition](#Description)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Installation](#Installation)
- [Questions](#Questions)
- [License](#License)

## Title
${answers.Title}

## Description
${answers.Description}

## Usage
${answers.Usage}

## Installation
${answers.Installation}

## Contribution
${answers.Contributing}

## Test Instructions
${answers.testInstru}

## Questions
${answers.Email}
${answers.GitHub}

## License
${this.sectionLicenseRender(answers.License)}
    `
    }
}

module.exports = MarkDown