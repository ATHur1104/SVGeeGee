const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What would you like to call this Logo?',
            name: 'logoName'
        },

        {
            type: 'input',
            message: 'Please enter 3 characters for your Logo',
            name: 'abvName',
            validate: function (value) {
                const letter = value.trim();
                if (letter.length !== 3) {
                    return 'Please enter 3 characters for your logo';
                }
                return true;
            }
        },

        {
            type: 'input',
            message: 'Please enter the text color keyword or #Hexadecimal for the logo',
            name: 'txtColor'
        },

        {
            type: 'list',
            message: 'Which background shape would you like?',
            name: 'shape',
            choices: [
                'Circle',
                'Triangle',
                'Square'
            ]
        },

        {
            type: 'input',
            message: 'Please enter the background color keyword or #Hexadecimal for the logo',
            name: 'bgColor'
        },
    ])
    .then((answers) => {
        console.log(JSON.stringify(answers, null, ' '));

        const svg1line = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">`;
        const svg3line = `<text x="50%" y="60%" font-size="60" text-anchor="middle" fill="${answers.txtColor}">${answers.abvName}</text></svg>`;

        const svgContent = generateSvgContent(answers, svg1line, svg3line);

        fs.writeFileSync(`./examples/${answers.logoName}.svg`, svgContent);
        console.log('Generated SVG!')
    });
    function generateSvgContent(answers, svg1line, svg3line) {
        let shape;
        if (answers.shape === 'Circle') {
          shape = new Circle(answers.bgColor);
        } else if (answers.shape === 'Triangle') {
          shape = new Triangle(answers.bgColor);
        } else if (answers.shape === 'Square') {
          shape = new Square(answers.bgColor);
        }
        if (shape) {
          const svg2line = shape.render(answers.txtColor, answers.abvName);
          return svg1line + svg2line + svg3line;
        } else {
          return '';
        }
      }