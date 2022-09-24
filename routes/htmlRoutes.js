const path = require('path');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});
router.post('/notes', (req, res) => {
    saveData
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});





module.exports = router;