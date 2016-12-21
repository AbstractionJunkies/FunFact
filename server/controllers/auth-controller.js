'use strict';

module.exports = function ({data, encryption}) {
    return {
        login(req, res) {

        },
        register(req, res) {
            let username = req.body.username;
            let password = req.body.password.toString();
            let confirmedPassword = req.body.confirmedPassword.toString();
            let email = req.body.email;

            if (password.length < 4) {
                res.status(401).json({ success: false, message: 'Password too short' });
                return;
            }

            if (password !== confirmedPassword) {
                res.status(401).json({ success: false, message: 'Passwords do not match' });
                return;
            }

            let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!pattern.test(email)) {
                res.status(401).json({ success: false, message: 'Email is not valid' });
                return;
            }

            const salt = encryption.generateSalt();
            const passHash = encryption.generateHashedPassword(salt, password);

            Promise.all([data.getByUsername(username), data.getByEmail(email)])
                .then(([existringUser, existingEmail]) => {

                    if (existringUser) {
                        res.status(409).json({
                            success: false,
                            message: 'Username already exist!'
                        });
                        return;
                    } else if (existingEmail) {
                        res.status(409).json({
                            success: false,
                            message: 'Email already exist!'
                        });
                        return;
                    }

                    console.log(username, email, password, confirmedPassword, passHash, salt);

                    data.createUser(username, passHash, email, salt)
                        .then(() => {
                            res.status(201).json({
                                success: true,
                                message: `User ${username} created succesfully`
                            });
                        });
                });
        },
        logout(req, res) {
        }
    };
};