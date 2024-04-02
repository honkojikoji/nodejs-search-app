const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const moment = require('moment');
const express = require('express');
const app = express();

moment.locale('ja');
let datetoday = moment().format('LL')
//'link'の部分はファイルをしている。
app.use(express.static('link'))

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(3000);