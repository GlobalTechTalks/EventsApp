const express = require('express');
const config = require('./config');
const router = require('./routes');

const serverPort = config.port;
const app = new express();

app.listen(serverPort);

router.initializeRoutes(app).then(() => {
    console.log(`Server started successfully on port: ${serverPort}`);
});

module.exports = app;
