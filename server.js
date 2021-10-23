const express = require ('express');
const PORT = process.env.PORT || 3001;
// assign express to the app variable to chain on methods 
const app = express();
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require ('./routes/htmlRoutes');

const { db } = require('./Develop/db/db.json');

app.get('/api/db', (req,res) => {
    console.log(req.query);
    res.json(db);
});




app.listen( PORT, () => {
    console.log( `API server now on port ${PORT}!`);
});


