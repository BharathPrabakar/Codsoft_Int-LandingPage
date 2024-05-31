const express = require('express');
const router = express.Router();
const path = require('path');



router.get('/signup', function (req, res) {
    res.sendFile(path.join(__dirname, './Login.html'));
});

router.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, './Landing_page.html'));
});

router.get('/success', function (req, res) {
    res.send('Form successfully submitted');
});


const app = express();

app.use('/', router);

app.listen(3000, function () {
    console.log('App listening on port 3000');
});
