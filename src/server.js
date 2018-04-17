const express = require('express');
const app = express();

const avengersData = require('./models/avengers.json');

const PORT_NO = 3100;

const getAvengerById = (id) => {
  const allAvengers = avengersData.avengers;
  for(let i = 0; i < allAvengers.length; i++) {
    if(allAvengers[i].id === id) {
      return allAvengers[i];
    }
  }
};

app.get("/avengers", (req, res) => {
  const avengerId = parseInt(req.query.id);
  console.log("Fetching avenger with Id: "+avengerId);
  const avenger = getAvengerById(avengerId);
  console.log("Retrieved Avenger: ", avenger);
  res.send(avenger);
});

app.get("/avengers/all", (req, res) => {
  console.log("Fetching All avengers: ", avengersData);
  setTimeout(() => {
    res.send(avengersData);
  }, 2000);
});

app.listen(PORT_NO, () => {
  console.log(`Avengers app started on port: ${PORT_NO}`);
});
