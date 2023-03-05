const Employee = require('../lib/employee');

describe("Employee", () => {
    // Test for all cases when initializing a new Employee object
    it("should create an object with a name, id and email as provided by the user through the command-line application's questions", () => {
        const employee = new Employee("Jerry Seinfeld", 9, "jerry.seinfeld@gmail.com")

        // Verify that the new object has the correct properties
        expect(employee.getName()).toEqual("Jerry Seinfeld");
        expect(employee.getId()).toEqual(9);
        expect(employee.getEmail()).toEqual("jerry.seinfeld@gmail.com");
    });
});