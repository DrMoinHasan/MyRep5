const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log('Received a request on /');
  res.send('Hello World!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App listening at http://0.0.0.0:${port}`);
});