var inquirer = require("inquirer");
const { Circle } = require("./lib/shapes");
const { Square } = require("./lib/shapes");
const { Triangle } = require("./lib/shapes");
const fs = require('fs')
//create input prompts array

const questions = [
  {
    type: "list",
    name: "shape",
    message: "What background shape do you want for your logo?",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "setColor",
    message:
      "What color would you like the shape to be? Please use either color keyword or hexidecimal values.?",
  },
  {
    type: "input",
    name: "textColor",
    message:
      "What color would you like the text to be? Please use either color keyword or hexidecimal values.?",
  },
  {
    type: "input",
    name: "text",
    message:
      "Please enter up to three characters for the foreground of your logo:",
    validate: function (input) {
      if (input.length <= 3) {
        return true;
      } else {
        return "Please enter no more than three characters.";
      }
    },
  },
];

//function to call prompts and feed them into renderer based on user input
//writetofile
inquirer.prompt(questions).then((answers) => {
  let chosenShape;

 if(answers.shape === 'Circle'){
  chosenShape = new Circle(answers.setColor, answers.textColor, answers.text)
 } else if(answers.shape === 'Square'){
  chosenShape = new Square(answers.setColor, answers.textColor, answers.text)
 } else if(answers.shape === 'Triangle'){
  chosenShape = new Triangle(answers.setColor, answers.textColor, answers.text)
 }

 fs.writeFile('logo.svg', chosenShape.render(), (err, result)=> {
  if (err) throw err;
console.log('svg created');
 })
});


