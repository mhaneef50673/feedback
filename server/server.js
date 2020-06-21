const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('*', function (req, res) {
  res.sendFile(path.join(publicPath, 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is listening on port ${port}.`)
});