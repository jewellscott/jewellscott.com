const moment = require('moment');

module.exports = value => {
  const dateObject = moment.utc(value);
  return `${dateObject.format('MMMM D, YYYY')}`;
};
