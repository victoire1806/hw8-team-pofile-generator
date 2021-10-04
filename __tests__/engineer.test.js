const Engineer = require("../lib/engineer");
const libFuncs = require("../lib/libFuncs");

// Jest Tests
describe("Engineer class", () => {
  describe("Initialization", () => {
    it("should create an Engineer object with 'name' string, 'id' number, 'email' string, and 'github' string", () => {
      const myEngineer = {
        name: "Burak Doe",
        id: 100,
        email: "burakdoe@gmail.com",
        github: "BDoeGH",
      };
      const engineer = new Engineer(myEngineer);

      expect(engineer).toBeInstanceOf(Engineer);
      expect(engineer.name).toEqual("Jane Doe");
      expect(engineer.id).toEqual(100);
      expect(engineer.email).toEqual("burakdoe@gmail.com");
      expect(engineer.github).toEqual("BDoeGH");
    });
  });

  describe("getGitHub", () => {
    it("should return the engineer Github username", () => {
      const myEngineer = {
        name: "Burak Doe",
        id: 100,
        email: "burakdoe@gmail.com",
        github: "BDoeGH",
      };
      const engineer = new Engineer(myEngineer);

      expect(engineer.getGitHub()).toEqual(engineer.github);
    });
  });

  describe("getRole", () => {
    it("should return the engineer role", () => {
      const myEngineer = {
        name: "Burak Doe",
        id: 100,
        email: "burakdoe@gmail.com",
        github: "BDoeGH",
      };
      const engineer = new Engineer(myEngineer);

      expect(engineer.getRole()).toEqual("Engineer");
    });
  });

  describe("questions", () => {
    it("should return Engineer questions", () => {
      expect(Engineer.questions).toEqual([
        {
          type: "input",
          message: `What is the engineer's name?`,
          validate: libFuncs.validateStringContent,
          filter: libFuncs.stringTrim,
          name: `name`,
        },
        {
          type: "input",
          message: `What is the engineer's ID?`,
          validate: libFuncs.validateID,
          filter: libFuncs.stringTrim,
          name: "id",
        },
        {
          type: "input",
          message: `What is the engineer's email?`,
          validate: libFuncs.validateEmail,
          filter: libFuncs.stringTrim,
          name: "email",
        },
        {
          type: "input",
          message: "What is the engineer's GitHub username?",
          validate: libFuncs.validateStringContent,
          filter: libFuncs.stringTrim,
          name: "github",
        },
      ]);
    });
  });
});