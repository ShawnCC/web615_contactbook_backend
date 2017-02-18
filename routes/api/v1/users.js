'use strict';

const express = require('express');
const router = express.Router();
const async = require('async');
const models = require('../../../models');

/**
 * Get a user by it's ID
 * GET /api/v1/users/:userId/
 */
router.get('/:userId/', (req, res) => {
    let responseData = {};
    let user;

    async.series([
        // Find the user by its ID
        (callback) => {
            models.user.findById(req.params.userId).then((data) => {
                if (!data) {
                    responseData.status = 404;
                    responseData.message = 'User not found';

                    return callback(new Error(responseData.message));
                } else {
                    user = data.get({plain: true});

                    return callback();
                }
            }).catch((err) => {
                responseData.status = 500,
                responseData.message = 'Error getting User.';

                return callback(err);
            });
        },

        // Check the authorization header against the api_key property of the
        // user, if they don't match return with an error, otherwise continue on
        (callback) => {
            if (user.api_key !== req.headers.authorization) {
                responseData.status = 403;
                responseData.message = 'Invalid credentials';

                return callback(new Error(responseData.message));
            }

            return callback();
        }
    ], (err) => {
        if (err) {
            console.log(new Date());
            console.log(err);

            res.status(responseData.status);
            res.json(responseData);
        } else {
            delete user.api_key;

            responseData.status = 200;
            responseData.message = 'User retrieved successfully';
            responseData.user = user;

            res.status(responseData.status);
            res.json(responseData);
        }
    });
});

/**
 * Create a user
 * POST /api/v1/users/
 */
router.post('/', (req, res) => {
    let responseData = {};

    models.user.create(req.body.user).then((data) => {
        responseData.status = 201,
        responseData.message = 'User created successfully!';
        responseData.user = data;

        res.status(responseData.status);
        res.json(responseData);
    }).catch((err) => {
        console.log(new Date());
        console.log(err);

        responseData.status = 500,
        responseData.message = 'Error creating User.';

        res.status(responseData.status);
        res.json(responseData);
    });
});

module.exports = router;
