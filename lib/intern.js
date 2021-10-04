const Employee = require("./employee");
const libFuncs = require("../lib/libfuncs");

class Intern extends Employee {
  constructor({ name, id, email, school } = {}) {
    super({ name, id, email });
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }

  static get questions() {
    return [
      ...super.questions("intern"),
      {
        type: "input",
        message: "Intern's school name?",
        validate: libFuncs.validateStringContent,
        filter: libFuncs.stringTrim,
        name: "school",
      },
    ];
  }
}

module.exports = Intern;