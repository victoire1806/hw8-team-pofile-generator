const Employee = require("./employee");
const libFuncs = require("../lib/libFuncs");

class Engineer extends Employee {
  constructor({ name, id, email, github } = {}) {
    super({ name, id, email });
    this.github = github;
  }

  getGitHub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }

  static get questions() {
    return [
      ...super.questions("engineer"),
      {
        type: "input",
        message: "What is the engineer's GitHub username?",
        validate: libFuncs.validateStringContent,
        filter: libFuncs.stringTrim,
        name: "github",
      },
    ];
  }
}

module.exports = Engineer;