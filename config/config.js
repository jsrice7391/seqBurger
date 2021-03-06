require('dotenv').config();

module.exports = {
    development: {
        username: process.env.DBUSER,
        password: process.env.DBPASS,
        database: "seq_burger",
        host: "127.0.0.1",
        dialect: "mysql"
    },
    test: {
        username: process.env.DBUSER,
        password: process.env.DBPASS,
        database: "seq_burger",
        host: "127.0.0.1",
        dialect: "mysql"
    },
    production: {
        use_env_variable: process.env.JAWSDB_URL
    }

}