'use strict';

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('user', {
            name: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: true
                }
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: true
                },
                unique: true
            },
            api_key: {
                 type: DataTypes.STRING,
                 validate: {
                     notEmpty: true
                 }
            }
    }, {
        timestamps: true,

        underscored: true,

        hooks: {
            beforeCreate: (instance) => {
                instance.api_key = Date.now().toString();
            }
        }
    });

    return User;
};
