const Express = require('express');
const helmet = require('helmet');

const config = require('./config');

const serverPort = config.port;
const router = require('./app/routes');

const app = new Express();

app.listen(serverPort);

app.use(helmet());
app.use('/', router);

router
  .initializeRoutes(app)
  .then(() => {
    console.log(`Server started successfully on port: ${serverPort}`);
  });

module.exports = app;
