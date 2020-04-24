const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


async function userReadMeInfomation() {
  try {
    const variables = await inquirer.prompt([
    {
        message: "Enter Project Title",
        type: "input",
        name: "ProjectTitle"
    },
    {
        message: "Enter Description",
        type: "input",
        name: "Description"
    },
    {
        message: "Enter Screenshot Link",
        type: "input",
        name: "Screenshot"
    },
    {
        message: "Enter Table of Contents",
        type: "input",
        name: "Content"
    },
    {
        message: "Enter Installation",
        type: "input",
        name: "Installation"
    },
    {
        message: "Enter Usage",
        type: "input",
        name: "Usage"
    },
    {
        message: "Enter License",
        type: "list",
        name: "License",
        choices: [
            "Public Domain",
            "Copyleft License",
            "Permissive License",
        ]
    },
    {
        message: "Enter Contributing",
        type: "input",
        name: "Contributing"
    },
    {
        message: "Enter Tests",
        type: "input",
        name: "Tests"
    },
    {
        message: "Enter Questions",
        type: "input",
        name: "Questions"
    },
    {
        message: "Enter User GitHub username",
        type: "input",
        name: "username",
        validate: function(answer)
        { if (answer == "") {
            return "You Must Enter Your GitHub Username";
        }
    return true;
} 
    }
]);

await writeFileAsync('README.md');

console.log("Successfuly created ReadMe File");

} catch (err) {
    console.log(err);
}
};

userReadMeInfomation ();