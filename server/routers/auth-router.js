/*globals */
'use strict';

const passport = require('passport');
const router = require('express').Router();

module.exports = function ({  app, controllers }) {
    const authController = controllers.auth;

    router
        .post('/login', passport.authenticate('local'), authController.login)
        .post('/register', authController.register)
        .post('/logout', authController.logout);

    app.use('/api/auth', router);
};