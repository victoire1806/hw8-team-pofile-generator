const Employee = require("./employee");
const libFuncs = require("./libFuncs");

class Manager extends Employee {
  constructor({ name, id, email, office } = {}) {
    super({ name, id, email });
    this.office = office;
  }

  getRole() {
    return "Manager";
  }

  static get questions() {
    return [
      ...super.questions("manager"),
      {
        type: "input",
        message: "What is the manager's office number?",
        validate: libFuncs.validateStringContent,
        filter: libFuncs.stringTrim,
        name: "office",
      },
    ];
  }
}

module.exports = Manager;