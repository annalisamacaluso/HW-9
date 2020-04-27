const generateHTML = require("./generateHTML");
const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");
const pdf = require("html-pdf");

inquirer.prompt([
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "list",
        message: "What is your favorite color?",
        name: "color",
        choices: ["green", "blue", "pink", "red"]
    }
]).then(function(response){
    console.log(response.color)
    axios.get(`https://api.github.com/users/${response.username}`)
    .then(function(res){
        var data = res.data;
        data.color = response.color;
        console.log(data)

        var html = generateHTML(data)
        // console.log(html)
        writeToFile(html)
    })
})


//function doAxios(response){}

// const questions = [
  
// ];

function writeToFile(data) {
    // fs.writeFileSync("newPDF.html", data);
    // var html = fs.readFileSync('newPDF.html', 'utf8');
    var options = { format: 'Letter' };
    
    pdf.create(data, options).toFile('./profile.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
    });
}

function makePDF(){
}

// function init() {

// }
// init();
