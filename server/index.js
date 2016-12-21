'use strict';

const express = require('express');

const app = express();
const stage = process.env.NODE_ENV || 'development';
const config = require('./config/config')[stage];
// const database = require('./server/config/database')(config);
// const data = require('./server/data')();
// const multer = require('multer');
// const storage = multer.memoryStorage();
// const auth = require('./server/config/auth');
// const upload = multer({ storage: storage });
// const encryption = require('./server/utilities/encryption');
// const userMiddleware = require('./server/middlewares/user-middleware');

require('./config/express')(config, app);
const controllers = require('./controllers')({ app });
require('./routers')({ app, controllers });

app.listen(config.port, () => console.log('Server running at port : ' + config.port));