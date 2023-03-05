const Intern = require('../lib/intern');

describe("Intern", () => {
    // Test for all cases when initializing a new Intern object
    it("should create an object with a name, id, email and school name as provided by the user through the command-line application's questions", () => {
        const intern = new Intern("Harry", 6, "harry@pottermore.com", "Hogwarts");

        // Verify that the new object has the correct properties
        expect(intern.getName()).toEqual("Harry");
        expect(intern.getId()).toEqual(6);
        expect(intern.getEmail()).toEqual("harry@pottermore.com");
        expect(intern.getSchool()).toEqual("Hogwarts");
    })
})