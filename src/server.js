const express = require('express');
const app = express();

const avengers = require('./models/avengers.json');

const PORT_NO = 3100;

app.get("/avengers", (req, res) => {
  res.send(avengers);
});

app.listen(PORT_NO, () => {
  console.log(`Avengers app started on port: ${PORT_NO}`);
});
