const fs = require('fs');
const inspirationsDIR = './src/assets/img/inspirations';
const othersDIR = './src/assets/img/others';

let output = '';

fs.readdir(inspirationsDIR, (err, files) => {
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


fs.readdir(othersDIR, (err, files) => {
    let iterations = files.length;
    let arrayAsString = '[';
    for (file of files) {
        arrayAsString += '"' + file + '"';

        if (!--iterations) {
            arrayAsString += ']'
            output += `let others = ${arrayAsString}; export {inspirations, others};`;
        } else {
            arrayAsString += ','
        }
    }
    fs.writeFile('./src/assets/js/images.js', output, function (err) {
        if (err) return console.log(err);
        console.log('Successfully exported images names');
    })
});
