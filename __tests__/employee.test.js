const Employee = require("../lib/employee");
const libFuncs = require("../lib/libFuncs");

// Jest Test
describe("Employee class", () => {
  describe("Initialization", () => {
    it("should create an Employee object with 'name' string, 'id' number, and 'email' string", () => {
      const myEmployee = {
        name: "Jose Doe",
        id: 101,
        email: "josedoe@gmail.com",
      };
      const employee = new Employee(myEmployee);

      expect(employee).toBeInstanceOf(Employee);
      expect(employee.name).toEqual("Jose Doe");
      expect(employee.id).toEqual(101);
      expect(employee.email).toEqual("josedoe@gmail.com");
    });
  });

  describe("getName", () => {
    it("should return the employee name", () => {
      const myEmployee = {
        name: "Jose Doe",
        id: 101,
        email: "josedoe@gmail.com",
      };
      const employee = new Employee(myEmployee);

      expect(employee.getName()).toEqual(myEmployee.name);
    });
  });

  describe("getID", () => {
    it("should return the employee ID", () => {
      const myEmployee = {
        name: "Jose Doe",
        id: 101,
        email: "josedoe@gmail.com",
      };
      const employee = new Employee(myEmployee);

      expect(employee.getID()).toEqual(myEmployee.id);
    });
  });

  describe("getEmail", () => {
    it("should return the employee email", () => {
      const myEmployee = {
        name: "Jose Doe",
        id: 101,
        email: "josedoe@gmail.com",
      };
      const employee = new Employee(myEmployee);

      expect(employee.getEmail()).toEqual(myEmployee.email);
    });
  });

  describe("getRole", () => {
    it("should return the employee role", () => {
      const myEmployee = {
        name: "Jose Doe",
        id: 101,
        email: "josedoe@gmail.com",
      };
      const employee = new Employee(myEmployee);

      expect(employee.getRole()).toEqual("Employee");
    });
  });

  describe("questions", () => {
    it("should return Employee questions", () => {
      expect(Employee.questions()).toEqual([
        {
          type: "input",
          message: `What is the employee's name?`,
          validate: libFuncs.validateStringContent,
          filter: libFuncs.stringTrim,
          name: `name`,
        },
        {
          type: "input",
          message: `What is the employee's ID?`,
          validate: libFuncs.validateID,
          filter: libFuncs.stringTrim,
          name: "id",
        },
        {
          type: "input",
          message: `What is the employee's email?`,
          validate: libFuncs.validateEmail,
          filter: libFuncs.stringTrim,
          name: "email",
        },
      ]);

      expect(Employee.questions("individual")).toEqual([
        {
          type: "input",
          message: `What is the individual's name?`,
          validate: libFuncs.validateStringContent,
          filter: libFuncs.stringTrim,
          name: `name`,
        },
        {
          type: "input",
          message: `What is the individual's ID?`,
          validate: libFuncs.validateID,
          filter: libFuncs.stringTrim,
          name: "id",
        },
        {
          type: "input",
          message: `What is the individual's email?`,
          validate: libFuncs.validateEmail,
          filter: libFuncs.stringTrim,
          name: "email",
        },
      ]);
    });
  });
});

