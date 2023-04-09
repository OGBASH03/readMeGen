class MarkDown {
    static generateReadMe(answers){
    return `
# ${answers.title}

## Table of Content
- [Project descrition](#Description)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Installation](#Installation)
- [Questions](#Questions)
- [License](#License)

## Title
$

## Description
${answers.Description}

## Usage
${answers.Usage}

## Installation
${answers.Installation}

## Questions
${answers.Email}
${answers.GitHub}

## License
${answers.License}
    `
    }
}

module.exports = MarkDown