const inquirer = require('inquirer');
const validator = require('email-validator');
const dayjs = require('dayjs');
const generateHTML = require('./lib/generateHTML');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Array of questions for user input
const questions = [
    "What is the team manager's name?",
    "What is the team manager's employee ID?",
    "What is the team manager's email address?",
    "What is the team manager's office number?",
    "What is the engineer's name?",
    "What is the engineer's employee ID?",
    "What is the engineer's email address?",
    "What is the engineer's GitHub username?",
    "What is the intern's name?",
    "What is the intern's employee ID?",
    "What is the intern's email address?",
    "What is the intern's school name?"
]

const [managerNameQ, managerIDQ, managerEmailQ, managerOfficeQ, engineerNameQ, engineerIDQ, engineerEmailQ, engineerGithubQ, internNameQ, internIDQ, internEmailQ, internSchoolQ] = questions;

var newManager;
var listOfEngineers = [];
var listOfInterns = [];

function checkForMoreUsers() {
    inquirer
        .prompt([{
            type: "list",
            message: "Would you like to add another team member or are you done?",
            choices: ["Engineer", "Intern", "My team is complete"],
            name: "nextMember",
        },])
        .then((data) => {
            if (data.nextMember === "Engineer") {
                engineerQuestions();
            } else if (data.nextMember === "Intern") {
                internQuestions();
            } else {
                createFile();
            }
        })
}

function engineerQuestions() {
    inquirer
        .prompt([
            {
                type: "input",
                message: engineerNameQ,
                name: "engineerName",
                validate: function (input) {
                    const done = this.async();
                    setTimeout(function () {
                        if (input.trim() === "") {
                            done("You need to provide a name for this team member");
                            return;
                        }
                        done(null, true);
                    }, 50);
                }
            },
            {
                type: "input",
                message: engineerIDQ,
                name: "engineerID",
                validate: function (input) {
                    const done = this.async();
                    setTimeout(function () {
                        if (isNaN(input) === true) {
                            done("You need to provide an ID number for this team member");
                            return false;
                        }
                        done(null, true);
                    }, 50);
                }
            },
            {
                type: "input",
                message: engineerEmailQ,
                name: "engineerEmail",
                validate: function (input) {
                    const done = this.async();
                    setTimeout(function () {
                        if (input === "") {
                            done("You need to provide an email for this team member");
                            return;
                        }
                        if (!validator.validate(input)) {
                            done("That's not a valid email address!")
                            return;
                        }
                        done(null, true);
                    }, 50);
                }
            },
            {
                type: "input",
                message: engineerGithubQ,
                name: "engineerGithub",
                validate: function (input) {
                    const done = this.async();
                    setTimeout(function () {
                        if (input.trim() === "") {
                            done("You need to provide an username");
                            return;
                        }
                        done(null, true);
                    }, 50);
                }
            },
        ])
        .then((data) => {
            const newEngineer = new Engineer(data.engineerName.toUpperCase(), data.engineerID, data.engineerEmail, data.engineerGithub);
            listOfEngineers.push(newEngineer);
            checkForMoreUsers();
        })
};

function internQuestions() {
    inquirer
        .prompt([
            {
                type: "input",
                message: internNameQ,
                name: "internName",
                validate: function (input) {
                    const done = this.async();
                    setTimeout(function () {
                        if (input.trim() === "") {
                            done("You need to provide a name for this team member");
                            return;
                        }
                        done(null, true);
                    }, 50);
                }
            },
            {
                type: "input",
                message: internIDQ,
                name: "internID",
                validate: function (input) {
                    const done = this.async();
                    setTimeout(function () {
                        if (isNaN(input) === true) {
                            done("You need to provide an ID number for this team member");
                            return false;
                        }
                        done(null, true);
                    }, 50);
                }
            },
            {
                type: "input",
                message: internEmailQ,
                name: "internEmail",
                validate: function (input) {
                    const done = this.async();
                    setTimeout(function () {
                        if (input === "") {
                            done("You need to provide an email for this team member");
                            return;
                        }
                        if (!validator.validate(input)) {
                            done("That's not a valid email address!")
                            return;
                        }
                        done(null, true);
                    }, 50);
                }
            },
            {
                type: "input",
                message: internSchoolQ,
                name: "internSchool",
                validate: function (input) {
                    const done = this.async();
                    setTimeout(function () {
                        if (input.trim() === "") {
                            done("You need to provide a name for the intern's school");
                            return;
                        }
                        done(null, true);
                    }, 50);
                }
            },
        ])
        .then((data) => {
            const newIntern = new Intern(data.internName.toUpperCase(), data.internID, data.internEmail, data.internSchool);
            listOfInterns.push(newIntern);
            checkForMoreUsers();
        })
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log("Success!")
    );
}

function createFile() {
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
                        writeToFile(fileName, generateHTML(newManager, listOfEngineers, listOfInterns));
                    } else {
                        var timeStamp = dayjs().unix()
                        fileName = `./dist/index-${timeStamp}.html`;
                        writeToFile(fileName, generateHTML(newManager, listOfEngineers, listOfInterns));
                    }
                })
        } else {
            writeToFile(fileName, generateHTML(newManager, listOfEngineers, listOfInterns));
        }
    } catch (err) {
        console.error(err);
    }
}


// Function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: managerNameQ,
                name: "managerName",
                validate: function (input) {
                    const done = this.async();
                    setTimeout(function () {
                        if (input.trim() === "") {
                            done("You need to provide a name for this team member");
                            return;
                        }
                        done(null, true);
                    }, 50);
                }
            },
            {
                type: "input",
                message: managerIDQ,
                name: "managerID",
                validate: function (input) {
                    const done = this.async();
                    setTimeout(function () {
                        if (isNaN(input) === true) {
                            done("You need to provide an ID number for this team member");
                            return false;
                        }
                        done(null, true);
                    }, 50);
                }
            },
            {
                type: "input",
                message: managerEmailQ,
                name: "managerEmail",
                validate: function (input) {
                    const done = this.async();
                    setTimeout(function () {
                        if (input === "") {
                            done("You need to provide an email for this team member");
                            return;
                        }
                        if (!validator.validate(input)) {
                            done("That's not a valid email address!")
                            return;
                        }
                        done(null, true);
                    }, 50);
                }
            },
            {
                type: "input",
                message: managerOfficeQ,
                name: "managerOffice",
                validate: function (input) {
                    const done = this.async();
                    setTimeout(function () {
                        if (isNaN(input) === true) {
                            done("You need to provide an office input for this team member");
                            return false;
                        }
                        done(null, true);
                    }, 50);
                }
            },
        ])
        .then((data) => {
            newManager = new Manager(data.managerName.toUpperCase(), data.managerID, data.managerEmail, data.managerOffice);
            checkForMoreUsers();
        })
}

// Function call to initialize app
init();