const userRoutes = require('../routes/userRoutes');

const enableRoutes = (expressApp) => {
    expressApp.use(userRoutes)

}

module.exports = { enableRoutes };