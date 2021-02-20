const router = require('express').Router();
const { v4: uuid } = require('uuid');
const { createNewNote, findById, validateNote, deleteNote } = require('../../lib/notes') 
const { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.sendStatus(404);
    }    
})

router.post('/notes', (req, res) => {
    // set id based on uuid
    req.body.id = uuid();

    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {
    const note = deleteNote(req.body.id, notes);
    res.json(note);
})

module.exports = router;