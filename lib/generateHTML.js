const fs = require('fs');

exports.generateManagerCard = function(manager) {
    var managerCard = `
    <div class="col">
        <div class="card text-center text-bg-success border-success mb-3" style="width: 18rem;">
            <div class="card-body">
                <h3 class="card-title">${manager.getName()}</h3>
                <p class="card-text"><i class="fa-solid fa-book-open-reader"></i>  Manager</p>
            </div>
            <ul class="border-success list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a class="text-success-emphasis" href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`
    return managerCard;
}

exports.generateEngineerCards = function(listOfEngineers) {
    var readyEngineerCards = "";
    for (let i = 0; i < listOfEngineers.length; i++) {
        const engineer = listOfEngineers[i];
        var engineerCard = `
        <div class="col">
            <div class="card text-center text-bg-success border-success mb-3" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title">${engineer.getName()}</h3>
                    <p class="card-text"><i class="fa-solid fa-rocket"></i> Engineer</p>
                </div>
                <ul class="border-success list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a class="text-success-emphasis" href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" class="card-link text-success-emphasis" target="_blank"> ${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>`
        readyEngineerCards = readyEngineerCards.concat(" ", engineerCard);
    }
    return readyEngineerCards;
}

exports.generateInternCards = function(listOfInterns) {
    var readyInternCards = "";
    for (let i = 0; i < listOfInterns.length; i++) {
        const intern = listOfInterns[i];
        var internCard = `
        <div class="col">
            <div class="card text-center text-bg-success border-success mb-3" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title">${intern.getName()}</h3>
                    <p class="card-text"><i class="fa-solid fa-graduation-cap"></i> Intern</p>
                </div>
                <ul class="border-success list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a class="text-success-emphasis" href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item text-capitalize">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>`
        readyInternCards = readyInternCards.concat(" ", internCard);
    }
    return readyInternCards;
}

exports.generateHTML = function(manager, listOfEngineers, listOfInterns) {
    var managerCard = this.generateManagerCard(manager);
    var engineerCards = this.generateEngineerCards(listOfEngineers);
    var internCards = this.generateInternCards(listOfInterns);
    var allCards = managerCard + engineerCards + internCards;

    var templateHTML = fs.readFileSync("./src/index-template.html", "utf8"); 

    templateHTML = templateHTML.replace("REPLACE ME", allCards);

    return templateHTML;
} 
