const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// getUserInfomation ();

async function userReadMeInfomation() {
  try {
    const variables = await inquirer.prompt([
        {
        message: "Enter Project Title",
        name: "ProjectTitle"
    },
    {
        message: "Enter Description",
        name: "Description"
    },
    {
        message: "Enter Table of Contents",
        name: "Content"
    },
    {
        message: "Enter Installation",
        name: "Installation"
    },
    {
        message: "Enter Usage",
        name: "Usage"
    },
    {
        message: "Enter License",
        name: "License"
    },
    {
        message: "Enter Contributing",
        name: "Contributing"
    },
    {
        message: "Enter Tests",
        name: "Tests"
    },
    {
        message: "Enter Questions",
        name: "Questions"
    },
    {
        message: "Enter User GitHub profile picture",
        name: "ProfilePicture"
    },
    {
        message: "Enter User GitHub email",
        name: "Email"
    },
]);

console.log(variables);

// writeFileAsync ('README.md',
// # ${variables.ProjectTitle}
// ## ${variables.Description}
// ## ${variables.Content}
// ## ${variables.Installation}
// ## ${variables.Usage}
// ## ${variables.License}
// ## ${variables.Contributing}
// ## ${variables.Tests}
// ## ${variables.Questions}
// ## ${variables.ProfilePicture}
// ## ${variables.Email}
// `)

 
} catch (err) {
    console.log(err);
  }
}

userReadMeInfomation ();
