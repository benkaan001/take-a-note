const express = require ('express');
const PORT = process.env.PORT || 3001;
// assign express to the app variable to chain on methods 
const app = express();
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require ('./routes/htmlRoutes');

const { db } = require('./Develop/db/db.json');

app.get('/api/notes', (req,res) => {
    const result = db;
    if(result){
        res.json(result);
    }else{
        res.send(404);

    }
   
});




app.listen( PORT, () => {
    console.log( `API server now on port ${PORT}!`);
});


