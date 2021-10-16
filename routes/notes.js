const notes = require('express').Router();
const { readDataFile, writeToFile, readAndAdd} = require('../helpers/helpers');
const { v4: uuidv4 } = require('uuid');

notes.get('/', (req,res) => {
    readDataFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    console.log(req.body);

    const {title ,text} = req.body;

    if(req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4()
        };
        readAndAdd(newNote, './db/db.json');
        res.json('New note added!');    
    } else {
        res.json('ERROR');
    }
    
});

module.exports = notes;