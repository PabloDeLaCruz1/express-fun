const express = require('express');
const app = express();
const chalk = require('chalk');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');




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

//Morgan
app.use(morgan('combined'));

// log all requests to access.log
app.use(morgan('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {
        flags: 'a'
    })
}));


app.get('/', (req, res) =>
    res.send('Hello World!')
);

app.get('/news', (req, res) =>
    res.send('This is todays news. The world is yet again about to end and you should panic because thats the only way to keep you reading every day.')
);

app.listen(3000, () =>
    console.log(chalk.red('Example app listening on port 3000!'))
);