const express = require('express');
const app = express();
const chalk = require('chalk');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const nunjucks = require('nunjucks');
const routes = require('./routes/');
//Middleware
// app.use((req, res, next) => {
//     console.log('Time:', Date.now())
//     console.log(chalk.blue('Hello world!'))
//     // res.sendStatus(200)
//     next()
// });
// app.use('/news/*', (req, res, next) => {
//     console.log('Time:', Date.now())
//     console.log(chalk.blue('Special News Site!'))
//     // res.sendStatus(200)
//     next()
// });

//Link to our routes to keep this file clean with only middleware and configurations separate. 
app.use(express.static('public'));
app.use('/', routes);

//Morgan middleware
app.use(morgan('combined'));

// log all requests to access.log
app.use(morgan('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {
        flags: 'a'
    })
}));

//Nunjucks 
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {
    noCache: true
}); // turns off caching since its time consuming in production. 


app.get('/', (req, res) => {
    const people = [{
        name: 'Pablo'
    }, {
        name: 'El Jefe'
    }, {
        name: 'Son'
    }];
    res.render('index', {
        title: 'Hall of Fame',
        people: people
    });
});

app.get('/news', (req, res) =>
    res.send('This is todays news. The world is yet again about to end and you should panic because thats the only way to keep you reading every day.')
);

app.listen(3000, () =>
    console.log(chalk.red('Example app listening on port 3000!'))
);