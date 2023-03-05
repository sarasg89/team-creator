const fs = require('fs');
const GenerateHTML = require('./generateHTML');
const dayjs = require('dayjs');
const inquirer = require('inquirer');


exports.writeToFile = function(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log("HTML file has been created! You can find it in the ./dist directory")
    );
}

exports.createFile = function(newManager, listOfEngineers, listOfInterns) {
    let fileName = "./dist/index.html";
    try {
        if (fs.existsSync(fileName)) {
            inquirer
                .prompt([
                    {
                        type: "confirm",
                        message: "This file name already exists, would you like to override it?",
                        name: "override",
                        default: "y",
                    }
                ])
                .then((response) => {
                    if (response.override) {
                        this.writeToFile(fileName, GenerateHTML.generateHTML(newManager, listOfEngineers, listOfInterns));
                    } else {
                        var timeStamp = dayjs().unix()
                        fileName = `./dist/index-${timeStamp}.html`;
                        this.writeToFile(fileName, GenerateHTML.generateHTML(newManager, listOfEngineers, listOfInterns));
                    }
                })
        } else {
            this.writeToFile(fileName, GenerateHTML.generateHTML(newManager, listOfEngineers, listOfInterns));
        }
    } catch (err) {
        console.error(err);
    }
}