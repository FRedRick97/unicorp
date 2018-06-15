const express = require('express');
const bodyparser = require('body-parser');

var app = express();

app.set('view engine', 'pug');
app.use('/assets', express.static('public'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/', function (req, res, next) {
    res.render('index');
});

app.listen(3000, function () {
    console.log('Server is up on port ' + 3000);
});
