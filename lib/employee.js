const libFuncs = require("./libFuncs");

// Employee is a parent class 
class Employee {
  constructor({ name, id, email } = {}) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getID() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }

  static questions(role = "employee") {
    return [
      {
        type: "input",
        message: `What is the ${role}'s name?`,
        validate: libFuncs.validateStringContent,
        filter: libFuncs.stringTrim,
        name: "name",
      },
      {
        type: "input",
        message: `What is the ${role}'s ID?`,
        validate: libFuncs.validateID,
        filter: libFuncs.stringTrim,
        name: "id",
      },
      {
        type: "input",
        message: `What is the ${role}'s email?`,
        validate: libFuncs.validateEmail,
        filter: libFuncs.stringTrim,
        name: "email",
      },
    ];
  }
}

module.exports = Employee;