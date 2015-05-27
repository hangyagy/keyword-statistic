'use strict';

var _         = require('lodash');
var statistic = require('./../../components/statistic/');

// Get list of contents
exports.index = function(req, res) {
  var url = req.param('url');

  if (url) {
    statistic
      .getStatistic(url)
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        throw err;
      });
  } else {
    res.status(404).send('Page not found');
  }
};
