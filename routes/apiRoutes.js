const router = require('express').Router();

const saveData = require('../db/saveData');

// router get request
router.get('/notes', function (req, res) {
    saveData
        .retrieveNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

// router post request
router.post('/notes', (req, res) => {
    saveData
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

// router delete request
// Learned this from module 12
router.delete('/:id', (req, res) => {
    saveData
        .deleteNote(req.body)
        .the((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

module.exports = router;