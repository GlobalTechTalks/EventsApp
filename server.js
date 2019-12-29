const Express = require('express');
const config = require('./config');

const serverPort = config.port;
const router = require('./app/routes');

const app = new Express();

app.disable('x-powered-by');
app.use(Express.json());

router
  .initializeRoutes(app)
  .then(() => {
    console.log(`Server started successfully on port: ${serverPort}`);
  });

app.listen(serverPort);

module.exports = app;
