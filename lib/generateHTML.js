const fs = require('fs');

function generateManagerCard(manager) {
    var managerCard = `
    <div class="col">
        <div class="card text-center text-bg-success border-success mb-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${manager.getName()}</h5>
                <p class="card-text">Manager</p>
            </div>
            <ul class="border-success list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: ${manager.getEmail()}</li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`
    return managerCard;
}

function generateEngineerCards(listOfEngineers) {
    var readyEngineerCards = "";
    for (let i = 0; i < listOfEngineers.length; i++) {
        const engineer = listOfEngineers[i];
        var engineerCard = `
        <div class="col">
            <div class="card text-center text-bg-success border-success mb-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${engineer.getName()}</h5>
                    <p class="card-text">Engineer</p>
                </div>
                <ul class="border-success list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                </ul>
                <div class="card-body">
                    <p>GitHub:</p><a href="https://github.com/${engineer.getGithub()}" class="card-link"> ${engineer.getGithub()}</a>
                </div>
            </div>
        </div>`
        readyEngineerCards = readyEngineerCards.concat(" ", engineerCard);
    }
}

function generateInternCards(listOfInterns) {
    var readyInternCards = "";
    for (let i = 0; i < listOfInterns.length; i++) {
        const intern = listOfInterns[i];
        var internCard = `
        <div class="col">
            <div class="card text-center text-bg-success border-success mb-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${intern.getName()}</h5>
                    <p class="card-text">Intern</p>
                </div>
                <ul class="border-success list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: ${intern.getEmail()}</li>
                </ul>
                <div class="card-body">
                    <p>School: ${intern.getSchool()}</p>
                </div>
            </div>
        </div>`
        readyInternCards = readyInternCards.concat(" ", internCard);
    }
}

function generateHTML(manager, listOfEngineers, listOfInterns) {
    var managerCard = generateManagerCard(manager);
    var engineerCards = generateEngineerCards(listOfEngineers);
    var internCards = generateInternCards(listOfInterns);
    var allCards = managerCard + engineerCards + internCards;

    var templateHTML = fs.readFileSync("./src/index-template.html", "utf8"); 

    templateHTML = templateHTML.replace("REPLACE ME", allCards);

    return templateHTML;
} 

module.exports = generateHTML;