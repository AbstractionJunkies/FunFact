'use strict';

module.exports = function () {
    return {
        getHome(req, res) {
            res.json({ page: 'home-page' });
        }
    };
};