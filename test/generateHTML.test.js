const GenerateHTML = require('../lib/generateHTML');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const fs = require('fs');

jest.mock('fs');

describe("generateManagerCard", () => {
    it("should generate HTML code for a card that displays the manager's information", () => {
        const manager = new Manager("Michael Scarn", "007", "michael.scarn@cia.com", 69);

        var expectedManagerCard = `
    <div class="col">
        <div class="card text-center text-bg-success border-success mb-3" style="width: 18rem;">
            <div class="card-body">
                <h3 class="card-title">Michael Scarn</h3>
                <p class="card-text"><i class="fa-solid fa-book-open-reader"></i>  Manager</p>
            </div>
            <ul class="border-success list-group list-group-flush">
                <li class="list-group-item">ID: 007</li>
                <li class="list-group-item">Email: <a class="text-success-emphasis" href="mailto:michael.scarn@cia.com">michael.scarn@cia.com</a></li>
                <li class="list-group-item">Office number: 69</li>
            </ul>
        </div>
    </div>`

        expect(GenerateHTML.generateManagerCard(manager)).toBe(expectedManagerCard);
    });
});

describe("generateEngineerCards", () => {
    it("shouldn't generate any HTML code when no engineer information is provided", () => {
        expect(GenerateHTML.generateEngineerCards([])).toBe("");
    });

    it("should generate HTML code for a card that displays the engineer's information, when 1 engineer is provided", () => {
        const engineer = new Engineer("Carl Grimes", 16, "carl.grimes@walkers.com", "sheriff_hat");

        var expectedEngineerCard = ` 
        <div class="col">
            <div class="card text-center text-bg-success border-success mb-3" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title">Carl Grimes</h3>
                    <p class="card-text"><i class="fa-solid fa-rocket"></i> Engineer</p>
                </div>
                <ul class="border-success list-group list-group-flush">
                    <li class="list-group-item">ID: 16</li>
                    <li class="list-group-item">Email: <a class="text-success-emphasis" href="mailto:carl.grimes@walkers.com">carl.grimes@walkers.com</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/sheriff_hat" class="card-link text-success-emphasis" target="_blank"> sheriff_hat</a></li>
                </ul>
            </div>
        </div>`

        expect(GenerateHTML.generateEngineerCards([engineer])).toBe(expectedEngineerCard);
    });

    it("should generate HTML code for a card that displays the engineer's information, when 2 or more engineers are provided", () => {
        const engineerOne = new Engineer("Carl Grimes", 16, "carl.grimes@walkers.com", "sheriff_hat");
        const engineerTwo = new Engineer("Glenn Rhee", 53, "glenn.rhee@walkers.com", "pocket_watch");

        var expectedEngineerCard = ` 
        <div class="col">
            <div class="card text-center text-bg-success border-success mb-3" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title">Carl Grimes</h3>
                    <p class="card-text"><i class="fa-solid fa-rocket"></i> Engineer</p>
                </div>
                <ul class="border-success list-group list-group-flush">
                    <li class="list-group-item">ID: 16</li>
                    <li class="list-group-item">Email: <a class="text-success-emphasis" href="mailto:carl.grimes@walkers.com">carl.grimes@walkers.com</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/sheriff_hat" class="card-link text-success-emphasis" target="_blank"> sheriff_hat</a></li>
                </ul>
            </div>
        </div> 
        <div class="col">
            <div class="card text-center text-bg-success border-success mb-3" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title">Glenn Rhee</h3>
                    <p class="card-text"><i class="fa-solid fa-rocket"></i> Engineer</p>
                </div>
                <ul class="border-success list-group list-group-flush">
                    <li class="list-group-item">ID: 53</li>
                    <li class="list-group-item">Email: <a class="text-success-emphasis" href="mailto:glenn.rhee@walkers.com">glenn.rhee@walkers.com</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/pocket_watch" class="card-link text-success-emphasis" target="_blank"> pocket_watch</a></li>
                </ul>
            </div>
        </div>`

        expect(GenerateHTML.generateEngineerCards([engineerOne, engineerTwo])).toBe(expectedEngineerCard);
    });
})

describe("generateInternCards", () => {
    it("shouldn't generate any HTML code when no intern information is provided", () => {
        expect(GenerateHTML.generateInternCards([])).toBe("");
    });

    it("should generate HTML code for a card that displays the intern's information, when 1 intern is provided", () => {
        const intern = new Intern("Ron", 7, "ron@pottermore.com", "Hogwarts");

        var expectedInternCard = ` 
        <div class="col">
            <div class="card text-center text-bg-success border-success mb-3" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title">Ron</h3>
                    <p class="card-text"><i class="fa-solid fa-graduation-cap"></i> Intern</p>
                </div>
                <ul class="border-success list-group list-group-flush">
                    <li class="list-group-item">ID: 7</li>
                    <li class="list-group-item">Email: <a class="text-success-emphasis" href="mailto:ron@pottermore.com">ron@pottermore.com</a></li>
                    <li class="list-group-item text-capitalize">School: Hogwarts</li>
                </ul>
            </div>
        </div>`

        expect(GenerateHTML.generateInternCards([intern])).toBe(expectedInternCard);
    });

    it("should generate HTML code for a card that displays the intern's information, when 2 or more interns are provided", () => {
        const internOne = new Intern("Hermione", 3, "hermione@pottermore.com", "Hogwarts");
        const internTwo = new Intern("Draco", 13, "draco@pottermore.com", "Hogwarts");

        var expectedInternCard = ` 
        <div class="col">
            <div class="card text-center text-bg-success border-success mb-3" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title">Hermione</h3>
                    <p class="card-text"><i class="fa-solid fa-graduation-cap"></i> Intern</p>
                </div>
                <ul class="border-success list-group list-group-flush">
                    <li class="list-group-item">ID: 3</li>
                    <li class="list-group-item">Email: <a class="text-success-emphasis" href="mailto:hermione@pottermore.com">hermione@pottermore.com</a></li>
                    <li class="list-group-item text-capitalize">School: Hogwarts</li>
                </ul>
            </div>
        </div> 
        <div class="col">
            <div class="card text-center text-bg-success border-success mb-3" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title">Draco</h3>
                    <p class="card-text"><i class="fa-solid fa-graduation-cap"></i> Intern</p>
                </div>
                <ul class="border-success list-group list-group-flush">
                    <li class="list-group-item">ID: 13</li>
                    <li class="list-group-item">Email: <a class="text-success-emphasis" href="mailto:draco@pottermore.com">draco@pottermore.com</a></li>
                    <li class="list-group-item text-capitalize">School: Hogwarts</li>
                </ul>
            </div>
        </div>`

        expect(GenerateHTML.generateInternCards([internOne, internTwo])).toBe(expectedInternCard);
    });
})

describe("generateHTML", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    })
    it("should generate a block of HTML containing cards for 1 manager, 1 engineer and 1 intern", () => {
        fs.readFileSync.mockReturnValue("REPLACE ME");

        const manager = new Manager("Michael Scarn", "007", "michael.scarn@cia.com", 69);
        const engineer = new Engineer("Carl Grimes", 16, "carl.grimes@walkers.com", "sheriff_hat");
        const intern = new Intern("Ron", 7, "ron@pottermore.com", "Hogwarts");

        var expectedManagerCard = `
    <div class="col">
        <div class="card text-center text-bg-success border-success mb-3" style="width: 18rem;">
            <div class="card-body">
                <h3 class="card-title">Michael Scarn</h3>
                <p class="card-text"><i class="fa-solid fa-book-open-reader"></i>  Manager</p>
            </div>
            <ul class="border-success list-group list-group-flush">
                <li class="list-group-item">ID: 007</li>
                <li class="list-group-item">Email: <a class="text-success-emphasis" href="mailto:michael.scarn@cia.com">michael.scarn@cia.com</a></li>
                <li class="list-group-item">Office number: 69</li>
            </ul>
        </div>
    </div>`

        var expectedEngineerCard = ` 
        <div class="col">
            <div class="card text-center text-bg-success border-success mb-3" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title">Carl Grimes</h3>
                    <p class="card-text"><i class="fa-solid fa-rocket"></i> Engineer</p>
                </div>
                <ul class="border-success list-group list-group-flush">
                    <li class="list-group-item">ID: 16</li>
                    <li class="list-group-item">Email: <a class="text-success-emphasis" href="mailto:carl.grimes@walkers.com">carl.grimes@walkers.com</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/sheriff_hat" class="card-link text-success-emphasis" target="_blank"> sheriff_hat</a></li>
                </ul>
            </div>
        </div>`

        var expectedInternCard = ` 
        <div class="col">
            <div class="card text-center text-bg-success border-success mb-3" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title">Ron</h3>
                    <p class="card-text"><i class="fa-solid fa-graduation-cap"></i> Intern</p>
                </div>
                <ul class="border-success list-group list-group-flush">
                    <li class="list-group-item">ID: 7</li>
                    <li class="list-group-item">Email: <a class="text-success-emphasis" href="mailto:ron@pottermore.com">ron@pottermore.com</a></li>
                    <li class="list-group-item text-capitalize">School: Hogwarts</li>
                </ul>
            </div>
        </div>`

        expect(GenerateHTML.generateHTML(manager, [engineer], [intern])).toBe(expectedManagerCard + expectedEngineerCard + expectedInternCard);
    })

    it("should generate a block of HTML containing cards for 1 manager, 0 engineer if none provided and 1 intern", () => {
        fs.readFileSync.mockReturnValue("REPLACE ME");

        const manager = new Manager("Michael Scarn", "007", "michael.scarn@cia.com", 69);
        const intern = new Intern("Ron", 7, "ron@pottermore.com", "Hogwarts");

        var expectedManagerCard = `
    <div class="col">
        <div class="card text-center text-bg-success border-success mb-3" style="width: 18rem;">
            <div class="card-body">
                <h3 class="card-title">Michael Scarn</h3>
                <p class="card-text"><i class="fa-solid fa-book-open-reader"></i>  Manager</p>
            </div>
            <ul class="border-success list-group list-group-flush">
                <li class="list-group-item">ID: 007</li>
                <li class="list-group-item">Email: <a class="text-success-emphasis" href="mailto:michael.scarn@cia.com">michael.scarn@cia.com</a></li>
                <li class="list-group-item">Office number: 69</li>
            </ul>
        </div>
    </div>`

        var expectedInternCard = ` 
        <div class="col">
            <div class="card text-center text-bg-success border-success mb-3" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title">Ron</h3>
                    <p class="card-text"><i class="fa-solid fa-graduation-cap"></i> Intern</p>
                </div>
                <ul class="border-success list-group list-group-flush">
                    <li class="list-group-item">ID: 7</li>
                    <li class="list-group-item">Email: <a class="text-success-emphasis" href="mailto:ron@pottermore.com">ron@pottermore.com</a></li>
                    <li class="list-group-item text-capitalize">School: Hogwarts</li>
                </ul>
            </div>
        </div>`

        expect(GenerateHTML.generateHTML(manager, [], [intern])).toBe(expectedManagerCard + expectedInternCard);
    })

    it("should generate a block of HTML containing cards for 1 manager, 1 engineer and 0 intern if none provided", () => {
        fs.readFileSync.mockReturnValue("REPLACE ME");

        const manager = new Manager("Michael Scarn", "007", "michael.scarn@cia.com", 69);

        const engineer = new Engineer("Carl Grimes", 16, "carl.grimes@walkers.com", "sheriff_hat");

        var expectedManagerCard = `
    <div class="col">
        <div class="card text-center text-bg-success border-success mb-3" style="width: 18rem;">
            <div class="card-body">
                <h3 class="card-title">Michael Scarn</h3>
                <p class="card-text"><i class="fa-solid fa-book-open-reader"></i>  Manager</p>
            </div>
            <ul class="border-success list-group list-group-flush">
                <li class="list-group-item">ID: 007</li>
                <li class="list-group-item">Email: <a class="text-success-emphasis" href="mailto:michael.scarn@cia.com">michael.scarn@cia.com</a></li>
                <li class="list-group-item">Office number: 69</li>
            </ul>
        </div>
    </div>`

        var expectedEngineerCard = ` 
        <div class="col">
            <div class="card text-center text-bg-success border-success mb-3" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title">Carl Grimes</h3>
                    <p class="card-text"><i class="fa-solid fa-rocket"></i> Engineer</p>
                </div>
                <ul class="border-success list-group list-group-flush">
                    <li class="list-group-item">ID: 16</li>
                    <li class="list-group-item">Email: <a class="text-success-emphasis" href="mailto:carl.grimes@walkers.com">carl.grimes@walkers.com</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/sheriff_hat" class="card-link text-success-emphasis" target="_blank"> sheriff_hat</a></li>
                </ul>
            </div>
        </div>`

        expect(GenerateHTML.generateHTML(manager, [engineer], [])).toBe(expectedManagerCard + expectedEngineerCard);
    })

    it("should generate a block of HTML containing cards for 1 manager, 0 engineer if none are provided and 0 intern if none provided", () => {
        fs.readFileSync.mockReturnValue("REPLACE ME");

        const manager = new Manager("Michael Scarn", "007", "michael.scarn@cia.com", 69);

        var expectedManagerCard = `
    <div class="col">
        <div class="card text-center text-bg-success border-success mb-3" style="width: 18rem;">
            <div class="card-body">
                <h3 class="card-title">Michael Scarn</h3>
                <p class="card-text"><i class="fa-solid fa-book-open-reader"></i>  Manager</p>
            </div>
            <ul class="border-success list-group list-group-flush">
                <li class="list-group-item">ID: 007</li>
                <li class="list-group-item">Email: <a class="text-success-emphasis" href="mailto:michael.scarn@cia.com">michael.scarn@cia.com</a></li>
                <li class="list-group-item">Office number: 69</li>
            </ul>
        </div>
    </div>`

        expect(GenerateHTML.generateHTML(manager, [], [])).toBe(expectedManagerCard);
    })
}) 