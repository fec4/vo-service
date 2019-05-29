const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('../database/index');

let app = express();

app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.json());

