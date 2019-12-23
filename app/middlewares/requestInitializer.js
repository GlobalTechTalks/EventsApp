const uuid = require('uuid');

module.exports = (req, res, next) => {
  req.requestData = req.requestData || {};
  req.requestData.requestId = uuid.v4();

  res.header('x-gtt-requestId', req.requestData.requestId);

  next();
};
