const express = require('express');
const crawl = require('./crawl');
const app = express();
const port = 3000;

app.set('view engine', 'pug');

app.get('/', function (req, res) {
    crawl.getData('http://pawel-wrzosek.pl').then((data) => {
        res.render('index', {
            title: 'Tytuł ',
            message: 'Siema',
            crawler: data,
        });
    });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
