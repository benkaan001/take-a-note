const fs = require('fs');
const path = require('path');



// create a new note
const createNewNote = (note, notesArray) => {
    
    // add the new note to the notesArray
    notesArray.push(note);

    // update the database json file with the notesArray
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    //return finsihed code to post route for response
    return note;
};

const findById = (id, notesArray) => {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
};

const deleteNote = (note, notesArray) => {
    const index = notesArray.indexOf(note);
    notesArray.splice(index, 1);

    //update the database file
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify( { notes: notesArray}, null, 2)
    );
};


module.exports = { createNewNote, findById, deleteNote } ;