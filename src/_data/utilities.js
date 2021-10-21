const moment = require('moment');

const sentenceCase = function (str) {
  if (typeof str !== 'string' || !str.length) {
    return str;
  }
  str = str.replaceAll(/-/g, " ");
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

const humanizeDate = function (datetime, date) {
  const m = moment(datetime || date);
  if (datetime) {
    return m.format('LLL');
  }
  return m.format('LL');
};

module.exports = {
  sentenceCase,
  humanizeDate
};
