const express = require('express');
const crawl = require('./crawl');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.use( bodyParser.json() );      
app.use(bodyParser.urlencoded({     
  extended: true
})); 

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Tytuł ',
        message: 'Siema',
    });
});


app.post('/result', (req, res) => {
    console.log(req.body.title)
    let url =  req.body.title
    crawl.getData(url).then((data) => {
        res.render('index', {
            title: 'Tytuł ',
            message: 'Wynik',
            crawler: data,
        });
    });
  })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
