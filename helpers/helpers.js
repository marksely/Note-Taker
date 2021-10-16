const fs = require('fs');
const util = require('util');

const readDataFile = util.promisify(fs.readFile);

const writeToFile = (fileLocation, data) => {
    fs.writeFile(fileLocation, JSON.stringify(data, null, 4), (err) => err ? console.log(err) : console.log('Data successfully written to file!'))
};

const readAndAdd = (data, file) => {
    fs.readFile(file, 'utf8', (err,data) => {
        if(err) {
            console.log(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(data);
            writeToFile(file, parsedData);
        }
    });
};

module.exports = {
    readDataFile,
    writeToFile,
    readAndAdd
};