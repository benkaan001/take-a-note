const fs = require('fs');
const path = require('path');


function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    //return finsihed code to post route for response
    return note;
};

module.exports = { createNewNote };