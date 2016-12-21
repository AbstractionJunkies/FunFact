'use strict';

module.exports = function () {
    return {
        getHome(req, res) {
            res.send('hello');
        }
    };
};