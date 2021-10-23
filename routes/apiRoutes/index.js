
// const { createNewNote} = require('../../server');

// const { db } = require('../../Develop/db/db.json');

const router = require('express').Router();
const notesRoutes = require('./notesRoutes');

router.use(notesRoutes);




module.exports = router;