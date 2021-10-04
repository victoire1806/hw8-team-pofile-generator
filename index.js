// Runs the application
const Team = require("./lib/team");
const TeamProfile = require("./dist/teamProfile");

const team = new Team();
team
  .collectTeamProps()
  .then((team) => {
    const teamSite = new TeamProfile(team);
    teamSite.generateTeamProfile();
  })
  .then(() =>
    console.log("Team profile HTML page is in 'dist' folder")
  )
  .catch((err) => console.log(err));