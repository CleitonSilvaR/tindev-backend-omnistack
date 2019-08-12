const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  const aux = req.query.name;
  return res.json({ message: `Ola ${aux}` });
});

routes.post('/devs', (req, res) => {
  return res.json({ message: 'OK ' });
});

module.exports = routes;
