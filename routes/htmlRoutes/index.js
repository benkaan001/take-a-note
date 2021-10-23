const path = require('path');
const router = require('express').Router();

app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, './develop/public/notes.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './develop/public/index.html'));
});

module.exports = router;
