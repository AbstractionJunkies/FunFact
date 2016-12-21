'use strict';

module.exports = function () {
    return {
        getHome(req, res) {
            res.sendFile('index.html');
        }
    };
};