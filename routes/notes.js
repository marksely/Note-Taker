const notes = require('express').Router();
const { readDataFile, writeToFile, readAndAdd} = require('../helpers/helpers');

notes.get('/', (req,res) => {
    readDataFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    console.log(req.body);

    const {title ,text} = req.body;

    if(req.body) {
        let newNote = {
            title,
            text,
            //id:
        };
        
        readAndAdd(newNote, './db/db.json');
        res.json('New note added!');    
    } else {
        res.json('ERROR');
    }
    
});

module.exports = notes;