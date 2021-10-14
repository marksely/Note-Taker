const notes = require('express').Router();
const fs = require('fs');

notes.get('/notes', (req,res) => {
    readFromFile('db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/notes', (req,res) => {
    console.log(req.body);

    const {title ,text} = req.body;

    if(title && text) {
        const newNote = {
            title,
            text,
            id: Math.floor(math.random() * 100)
        }
    }

    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if(err) {
            console.log(err);
        } else {
            const parsedData = JSON.parse(data);

            parsedData.push(newNote);

        fs.writeFile('db/db.json', JSON.stringify(parsedData), (err) => {
            if(err) {
                console.log(err);
            } else {
                console.log('Note Sucessfully Added!');
            }
         })
        }
    })
});

module.exports = notes;