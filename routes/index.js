async function initializeRoutes(app) {
    app.get('/', (req, res) => {
        res.send('All working fine!!');
    });
};

module.exports = {
    initializeRoutes
}