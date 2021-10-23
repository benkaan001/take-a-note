
const { createNewNote} = require('../../server');

const { db } = require('../../Develop/db/db.json');

const router = require('express').Router();


router.get('/notes', (req,res) => {
    const result = db;
    if(result){
        res.json(result);
    }else{
        res.sendStatus(404);

    }
   
});

router.post('/notes', (req,res) =>{
    // req.body holds the incoming content
    console.log(req.body);

    //add note to json file and notes array in this function
    const note = createNewNote(req.body, notes);
    res.json(note);

});

module.exports = router;