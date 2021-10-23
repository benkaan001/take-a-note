const express = require ('express');
const PORT = process.env.PORT || 3001;
// assign express to the app variable to chain on methods 
const app = express();
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require ('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true}));
//parse incoming JSON data
app.use(express.json());

app.use(express.static('public'));

const fs = require('fs');
const path = require('path');



const { db } = require('./Develop/db/db.json');

app.get('/api/notes', (req,res) => {
    const result = db;
    if(result){
        res.json(result);
    }else{
        res.sendStatus(404);

    }
   
});

app.post('/api/notes', (req,res) =>{
    // req.body holds the incoming content
    console.log(req.body);

    //add note to json file and notes array in this function
    const note = createNewNote(req.body, notes);
    res.json(note);

});

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

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './develop/public/index.html'));
});

app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, './develop/public/notes.html'));
});

app.listen( PORT, () => {
    console.log( `API server now on port ${PORT}!`);
});


