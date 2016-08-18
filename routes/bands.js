var express = require('express');
var router = express.Router();
const Band = require('../models/band')
const _ = require('lodash');

router.use(function (req, res, next) {
  req.body = _.pick(req.body, ['name', 'genre', 'corruptedByTheSystem'])
  next();
})

router.get('/', (req, res, next) => {
  Band.find({}, function (err, band) {
    if (err) {
      res.status(500).send();
    } else {
      res.json(band);
    }
  })
});

module.exports = router;
