const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('../database/index');
const path = require('path');
const config = require('config');
let port = 3000

let app = express();


app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.json());

const db = config.get('mongoURI');

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
