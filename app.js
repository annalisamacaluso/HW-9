const inquirer = require("inquirer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const makeHTML = require("./makeHTML");
let employeeArr = [];


function main(){
    inquirer.prompt(
        {
            type: "list",
            message: "What type of employee do you want to add?",
            name: "employee",
            choices: ["Manager", "Engineer", "Intern", "Submit"]
        }
    ).then(function(answer){
        console.log(answer.employee);
        switch (answer.employee) {
            case "Manager":
                makeManager();
                break;

            case "Engineer":
                makeEngineer();
                break;

            case "Intern":
                makeIntern();
                break;

            case "Submit":
                submit();
                break;

            default:
                break;
        }
    })
}

main();

function makeIntern(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "number",
            message: "What is your ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What school do you go to?",
            name: "school"
        }
    ]).then(function(response){
        console.log(response)
        const anIntern = new Intern(response.name, response.id, response.email, response.school);
        //console.log(anEmployee.getRole())
        employeeArr.push(anIntern)
        main();
    })
}

function makeManager(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "number",
            message: "What is your ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "officeNumber"
        }
    ]).then(function(response){
        console.log(response)
        const anManager = new Manager(response.name, response.id, response.email, response.officeNumber);
        //console.log(anEmployee.getRole())
        employeeArr.push(anManager)
        main();
    })
}

function makeEngineer(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "number",
            message: "What is your ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "github"
        }
    ]).then(function(response){
        console.log(response)
        const anEngineer = new Engineer(response.name, response.id, response.email, response.github);
        //console.log(anEmployee.getRole())
        employeeArr.push(anEngineer)
        main();
    })
}

function submit(){
    makeHTML(employeeArr);
}