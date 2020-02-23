const sequelize = require('../dbConfig/sequelize');
const { DB_CONNECTIONFAIL, TABLE_CREATION_DONE, CREATING_TABLES } = require('../constant/message');

const User = require('../models/user');
const syncDatabase = async () => {
    try {
        console.log(CREATING_TABLES);

        await User.sync({ force: true });

        console.log(TABLE_CREATION_DONE);


    } catch (exception) {
        console.log(DB_CONNECTIONFAIL);
    }

}
module.exports = { syncDatabase }