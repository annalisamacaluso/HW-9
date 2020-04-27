const fs = require("fs");

let topBitOfTheHTML = `<html lang="en">
<head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <meta http-equiv="X-UA-Compatible" content="ie=edge" />
   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
   <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
   <title>Document</title>"
</head>
<body>
`

let bottom = `
</body>
</html>
`

function makeHTML(employees){
    console.log(employees)
    //loop
    //for each type make html from function

    //add it into main html
    //write to file

    let allEmployees = ""

    employees.forEach(employee => {
        
        if(employee.title === "Intern"){
            let internHTML = makeIntern(employee);
            allEmployees = allEmployees + internHTML;
            //allEmployees += makeIntern(employee);
        } else if(employee.title === "Manager"){
            let managerHTML = makeManager(employee);
            allEmployees = allEmployees + managerHTML;
        } else {
            let engineerHTML = makeEngineer(employee);
            allEmployees = allEmployees + engineerHTML;
        }
    });

    let wholeThing = topBitOfTheHTML + allEmployees + bottom;
    console.log(wholeThing)
    fs.writeFileSync("employee.html", wholeThing);
}

function makeIntern(employee){
    return `
    <div>
    Name: ${employee.getName()}
    School: ${employee.school}
    </div>
    `
}

function makeManager(employee){
    return `
    <div>
    Name: ${employee.getName()}
    Office Number: ${employee.officeNumber}
    </div>
    `
}

function makeEngineer(employee){
    return `
    <div>
    Name: ${employee.getName()}
    GitHub: ${employee.getGithub()}
    </div>
    `
}

// ${employee.school || employee.officeNumber || employee.github}
module.exports = makeHTML;