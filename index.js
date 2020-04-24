const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


 function userReadMeInfomation() {
  return inquirer.prompt([
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
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
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
            }, 
    {
        message: "Enter User GitHub email",
        type: "input",
        name: "email",
        validate: function(answer)
        { if (answer == "") {
            return "You Must Enter Your GitHub Email";
        }
    return true;
         }    
            }   
    
]);
}

async function makeReadme () {
console.log("Making ReadMe...")
const result = await writeFileAsync('README.md');
console.log("Successfuly created ReadMe File");
}

makeReadme ();

// async function makeReadme () {
//     console.log("Making ReadMe...")
    
//     try {
//     const data = userReadMeInfomation ();
//     await writeFileAsync('README.md');
//     console.log("Successfuly created ReadMe File");
    
//     } catch (err) {
//         console.log(err);
//         }
//             };
        
    
//     makeReadme ();