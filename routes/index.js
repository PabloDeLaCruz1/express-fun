const express = require('express');
const router = express.Router();
const tweetsData = require('../data/tweets');


router.get('/', function (req, res) {
    let tweets = tweetsData.list();
    res.render( 'index', { tweets: tweets } );
  });