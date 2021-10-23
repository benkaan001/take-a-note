const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
// assign express to the app variable to chain on methods 

const apiRoutes = require ('./routes/apiRoutes');
const htmlRoutes = require ('./routes/htmlRoutes');


app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));


//Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen( PORT, () => {
    console.log( `API server now on port ${PORT}!`);
});


