const Manager = require('../lib/manager');

describe("Manager", () => {
    // Test for all cases when initializing a new Manager object
    it("should create an object with a name, id, email and office number as provided by the user through the command-line application's questions", () => {
        const manager = new Manager("Michael Scott", 1, "michael.scott@dundermifflin.com", "69");

        // Verify that the new object has the correct properties
        expect(manager.getName()).toEqual("Michael Scott");
        expect(manager.getId()).toEqual(1);
        expect(manager.getEmail()).toEqual("michael.scott@dundermifflin.com");
        expect(manager.getOfficeNumber()).toEqual("69");
    })
})