const express = require('express');

const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    db
    .select('*')
    .from('cars')
    .then(cars => {
        res.json(cars);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get users' });
      });
  });

router.post('/', (req, res) => {
    const carData = req.body;
    db('cars')
    .insert(carData)
    .then(ids => {
        res.status(201).json({message: 'Car added to database'});
    })
    .catch(err => {
        res.status(500).json({error:'Car failed to be added to database'})
    })
})
module.exports = router;