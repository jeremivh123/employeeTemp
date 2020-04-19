/*const Manager = require("./libb/Manager");
const Engineer = require("./libb/Engineer");
const Intern = require("./libb/Intern");*/
const http = require('http');
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
//const OUTPUT_DIR = path.resolve(__dirname, "output")
//const outputPath = path.join(OUTPUT_DIR, "team.html");
​
//const render = require("./lib/htmlRenderer");

function onRequest(request,reponse){
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./engineer.html',null , function(error, data){
        if (error){
            response.writeHead(404);
            response.write('error');
        }else{
            response.write(data);
        }
        response.end();
    });
}
http.createServer(onRequest).listen(8000);

inquirer.prompt([
    {
        type: 'list',
        name: 'teamMemberType',
        message: 'What type of team member will you like to add?',
        choices: [
            'Manager',
            'Engineer',
            'Intern',
            'I dont want to add anymore team members.',
        ]
    },
    {
        type: 'input',
        name: 'managerYes',
        when: function(answers){
            return answers.teamMemberType ==='Manager';
        },
        message: [
            'ID:',
            'Email:',
            'Office number:',
        ]
    },
    {
        type: 'input',
        name: 'engineerYes',
        when: function(answers){
            return answers.teamMemberType ==='Engineer';
        },
        message: [
            'ID:',
            'Email:',
            'GitHub:',
        ]
    },
    {
        type: 'input',
        name: 'internYes',
        when: function(answers){
            return answers.teamMemberType ==='Intern';
        },
        message: [
            'ID:',
            'Email:',
            'School:',
        ]
    }
]);

module.exports.

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
