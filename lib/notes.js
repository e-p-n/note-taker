const fs = require("fs");
const path = require("path");

function updateNotesToFile(notesArray) {
    fs.writeFileSync (
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    )
}

function createNewNote(note, notesArray) {
    notesArray.push(note);
    updateNotesToFile(notesArray);

    return note;
}

function validateNote(note) {
    if(!note.title || typeof note.title !== 'string' ||
       !note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

function deleteNote(id, notesArray) {
    deletePos = notesArray.findIndex(note => note.id === id);
    notesArray.splice(deletePos, 1);
    updateNotesToFile(notesArray);

}

module.exports = { createNewNote, validateNote, deleteNote };