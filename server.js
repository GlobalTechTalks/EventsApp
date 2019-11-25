const express = require('express');
const config = require('./config');
const router = require('./routes');

const serverPort = config.port;
var indexRouter = require('./routes/index');
const app = new express();

app.listen(serverPort);

app.use('/', indexRouter);

router.initializeRoutes(app).then(() => {
    console.log(`Server started successfully on port: ${serverPort}`);
});

module.exports = app;
