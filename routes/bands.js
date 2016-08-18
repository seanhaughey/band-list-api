var express = require('express');
var router = express.Router();
const Band = require('../models/band')
const _ = require('lodash');

router.use(function (req, res, next) {
  req.body = _.pick(req.body, ['name', 'genre', 'corruptedByTheSystem'])
  next();
})


module.exports = router;
