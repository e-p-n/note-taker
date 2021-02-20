const router = require('express').Router();
const path = require('path');

// Set index.html as the homepage so that the server sends it when the root website is called.
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});


router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});


module.exports = router;