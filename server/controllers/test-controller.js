'use strict';

module.exports = function () {
    return {
        getTest(req, res) {
            res.json({ 'are': 'tragvai' });
        }
    };
};
