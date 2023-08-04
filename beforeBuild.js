const fs = require('fs');
const inspirationsDIR = './src/assets/img/inspirations';
const othersDIR = './src/assets/img/archivas';

let output = '';

fs.readdirSync(inspirationsDIR, (err, files) => {

    let iterations = files.length;
    let arrayAsString = '[';
    for (file of files) {
        arrayAsString += '"' + file + '"';

        if (!--iterations) {
            arrayAsString += ']';
            output += `let inspirations = ${arrayAsString};`;
        } else {
            arrayAsString += ','
        }

    }
});


fs.readdirSync(othersDIR, (err, files) => {
    let iterations = files.length;
    let arrayAsString = '[';
    for (file of files) {
        arrayAsString += '"' + file + '"';

        if (!--iterations) {
            arrayAsString += ']'
            output += `let archivas = ${arrayAsString}; export {inspirations, archivas};`;
        } else {
            arrayAsString += ','
        }
    }
    fs.writeFile('./src/assets/js/img.js', output, function (err) {
        if (err) return console.log(err);
        console.log('Successfully exported images names');
    })
});
