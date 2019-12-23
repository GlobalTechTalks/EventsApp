const requestInitializer = require('../middlewares/requestInitializer');

function initializeGenericRoutes(app) {
  app.use('/registration', require('./register'));
  app.use('/verify-account', require('./verification'));
  app.use('/login', require('./login'));
  app.use('/logout', require('./logout'));
  app.use('/forgot-password', require('./forgotPassword'));
  app.use('/change-password', require('./changePassword'));
}

function initializeAPIRoutes(app) {
  app.use('/api/users', require('./users'));
  app.use('/api/events', require('./events'));
}

module.exports.initializeRoutes = function (app) {
  app.use(requestInitializer);

  return new Promise((resolve, reject) => {
    try {
      initializeGenericRoutes(app);
      initializeAPIRoutes(app);
      resolve();
    } catch (ex) {
      console.log(ex);
      reject();
    }
  });
};
