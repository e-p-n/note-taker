const fs = require("fs");
const path = require("path");

function createNewNote(note, notesArray) {
    notesArray.push(note);
    fs.writeFileSync (
        path.join(__dirname, '../data/notes.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    )

    return note;
}

function findById(id, notesArray) {
    console.log(notesArray[0])
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}

function validateNote(note) {
    if(!note.title || typeof note.title !== 'string' ||
       !note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

module.exports = { createNewNote, findById, validateNote };