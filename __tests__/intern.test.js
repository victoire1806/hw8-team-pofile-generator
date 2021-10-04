const Intern = require("../lib/intern");
const libFuncs = require("../lib/libFuncs");

// Jest Tests
describe("Intern class", () => {
  describe("Initialization", () => {
    it("should create an Intern object with 'name' string, 'id' number, 'email' string, and 'school' string", () => {
      const myIntern = {
        name: "Marie Doe",
        id: 102,
        email: "mariedoe@gmail.com",
        school: "Georgia Tech",
      };
      const intern = new Intern(myIntern);

      expect(intern).toBeInstanceOf(Intern);
      expect(intern.name).toEqual("Marie Doe");
      expect(intern.id).toEqual(102);
      expect(intern.email).toEqual("mariedoe@gmail.com");
      expect(intern.school).toEqual("Georgia Tech");
    });
  });

  describe("getSchool", () => {
    it("should return the intern school name", () => {
      const myIntern = {
        name: "Marie Doe",
        id: 102,
        email: "mariedoe@gmail.com",
        school: "Georgia Tech",
      };
      const intern = new Intern(myIntern);

      expect(intern.getSchool()).toEqual(intern.school);
    });
  });

  describe("getRole", () => {
    it("should return the intern role", () => {
      const myIntern = {
        name: "Marie Doe",
        id: 102,
        email: "mariedoe@gmail.com",
        school: "Georgia Tech",
      };
      const intern = new Intern(myIntern);

      expect(intern.getRole()).toEqual("Intern");
    });
  });

  describe("questions", () => {
    it("should return Intern questions", () => {
      expect(Intern.questions).toEqual([
        {
          type: "input",
          message: `What is the intern's name?`,
          validate: libFuncs.validateStringContent,
          filter: libFuncs.stringTrim,
          name: `name`,
        },
        {
          type: "input",
          message: `What is the intern's ID?`,
          validate: libFuncs.validateID,
          filter: libFuncs.stringTrim,
          name: "id",
        },
        {
          type: "input",
          message: `What is the intern's email?`,
          validate: libFuncs.validateEmail,
          filter: libFuncs.stringTrim,
          name: "email",
        },
        {
          type: "input",
          message: "What is the intern's school name?",
          validate: libFuncs.validateStringContent,
          filter: libFuncs.stringTrim,
          name: "school",
        },
      ]);
    });
  });
});