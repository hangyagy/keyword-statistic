var crawler = require('phantom-crawler');
var _       = require('lodash');
var XRegExp = require('xregexp').XRegExp;

var textToWords = function(text) {
  var words;

  text = text.replace(/[.,?_+*!$&~@-^]/g, " ");

  words = text.trim().split(/\s+/);

  words = _.filter(words, function(word) {
	  return (word.length > 3);
  });

  return words;

};

var dataToStatistic = function(data) {
  var result = {};
  var content = data.content;

  var titleWords = textToWords(data.title);

  _.each(content, function(tagData) {
    var tagName = tagData.tag.toLowerCase();
    var text    = tagData.text.toLowerCase();
	var parents = tagData.parents || [];
	var attrs   = tagData.attributes;

    var words = textToWords(text);

    var inHeadline = false;
	var inTitle    = false;
	var inMeta     = false;

	var hParent = _.find(parents, function(tag) {
    	return /^H[0-9]/.test(tag);
	});

    if ( typeof hParent !== 'undefined' ) {
      inHeadline = true;
    }

    _.each(words, function(word) {
      if (!result[word]) {
        result[word] = {
          count: 0,
          inHeadline: false
        };
      }

      result[word].count++;

      if ( inHeadline === true ) {
        result[word].inHeadline = true;
      }

    });
  });

  return result;
};

var getStatistic = function(url) {
  return crawler.getContent(url)
    .then(function(data) {
      return dataToStatistic(data);
    });
};

module.exports = {
  getStatistic: getStatistic
};
