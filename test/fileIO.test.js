const fs = require('fs');
const WriteToFile = require('../lib/fileIO');
const CreateFile = require('../lib/fileIO');
const GenerateHTML = require('../lib/generateHTML');
const dayjs = require('dayjs');
const inquirer = require('inquirer');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

jest.mock('fs');
jest.mock('inquirer');
jest.mock('dayjs');

describe("WriteToFile", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    })
    it("should call fs.writeToFile with fileName and data as arguments", () => {
        const fileName = "index.html";
        const data = "here goes your HTML code";

        WriteToFile.writeToFile(fileName, data);

        expect(fs.writeFile).toBeCalledWith(fileName, data, expect.any(Function));
    });
});

describe("CreateFile", () => {
    beforeEach(() => {
        jest.resetAllMocks();
        fs.readFileSync.mockReturnValue("REPLACE ME");
    })
    it("should call fs.createFile when the file name already exists and the user chooses to override it", async () => {
        const fileName = "./dist/index.html";
        const manager = new Manager("Michael Scarn", "007", "michael.scarn@cia.com", 69);
        const engineerOne = new Engineer("Carl Grimes", 16, "carl.grimes@walkers.com", "sheriff_hat");
        const engineerTwo = new Engineer("Glenn Rhee", 53, "glenn.rhee@walkers.com", "pocket_watch");
        const internOne = new Intern("Hermione", 3, "hermione@pottermore.com", "Hogwarts");
        const internTwo = new Intern("Draco", 13, "draco@pottermore.com", "Hogwarts");
        const data = GenerateHTML.generateHTML(manager, [engineerOne, engineerTwo], [internOne, internTwo]);

        fs.existsSync.mockReturnValue(true);

        inquirer.prompt = jest.fn().mockResolvedValue({ override: true });
        
        await CreateFile.createFile(manager, [engineerOne, engineerTwo], [internOne, internTwo]);

        expect(fs.writeFile).toBeCalledWith(fileName, data, expect.any(Function));
    })

    it("should call fs.createFile when the file name already exists and the user chooses to NOT override it", async () => {
        const fileName = "./dist/index-123456.html";
        const manager = new Manager("Michael Scarn", "007", "michael.scarn@cia.com", 69);
        const engineerOne = new Engineer("Carl Grimes", 16, "carl.grimes@walkers.com", "sheriff_hat");
        const engineerTwo = new Engineer("Glenn Rhee", 53, "glenn.rhee@walkers.com", "pocket_watch");
        const internOne = new Intern("Hermione", 3, "hermione@pottermore.com", "Hogwarts");
        const internTwo = new Intern("Draco", 13, "draco@pottermore.com", "Hogwarts");
        const data = GenerateHTML.generateHTML(manager, [engineerOne, engineerTwo], [internOne, internTwo]);

        fs.existsSync.mockReturnValue(true);

        inquirer.prompt = jest.fn().mockResolvedValue({});
        
        await CreateFile.createFile(manager, [engineerOne, engineerTwo], [internOne, internTwo]);

        expect(fs.writeFile).toBeCalledWith(fileName, data, expect.any(Function));
    })

    it("should call fs.createFile when the file name doesn't already exist", () => {
        const fileName = "./dist/index.html";
        const manager = new Manager("Michael Scarn", "007", "michael.scarn@cia.com", 69);
        const engineerOne = new Engineer("Carl Grimes", 16, "carl.grimes@walkers.com", "sheriff_hat");
        const engineerTwo = new Engineer("Glenn Rhee", 53, "glenn.rhee@walkers.com", "pocket_watch");
        const internOne = new Intern("Hermione", 3, "hermione@pottermore.com", "Hogwarts");
        const internTwo = new Intern("Draco", 13, "draco@pottermore.com", "Hogwarts");
        const data = GenerateHTML.generateHTML(manager, [engineerOne, engineerTwo], [internOne, internTwo]);

        CreateFile.createFile(manager, [engineerOne, engineerTwo], [internOne, internTwo]);

        expect(fs.writeFile).toBeCalledWith(fileName, data, expect.any(Function));
    })
})