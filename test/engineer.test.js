const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    // Test for all cases when initializing a new Engineer object
    it("should create an object with a name, id, email and GitHub username as provided by the user through the command-line application's questions", () => {
        const engineer = new Engineer("Rick Grimes", 2, "rick.grimes@kingcounty.com", "rick_dep_sheriff");

        // Verify that the new object has the correct properties
        expect(engineer.getName()).toEqual("Rick Grimes");
        expect(engineer.getId()).toEqual(2);
        expect(engineer.getEmail()).toEqual("rick.grimes@kingcounty.com");
        expect(engineer.getGithub()).toEqual("rick_dep_sheriff");
    })
})