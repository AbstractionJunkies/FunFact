const path = require('path');

const rootPath = path.normalize(path.join(__dirname, '/../../'));
const PORT = process.env.PORT || 1337;

module.exports = {
    development: {
        rootPath: rootPath,
        connectionString: 'Kiko? kak e linka :D',
        port: PORT
    },
    production: {
        rootPath: rootPath,
        connectionString: process.env.CONNECTION_STRING,
        port: PORT
    }
};