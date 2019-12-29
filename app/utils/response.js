const { errors } = require('./errors');

module.exports.respond = (res, code, message) => {
  if (!res) {
    return;
  }

  if (!code) {
    res.status(500);
    res.send(errors.INTERNAL_ERROR.reason);
    return;
  }

  const data = message || {};

  res.status(code);
  res.send(data);
};
