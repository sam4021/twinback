'use strict';
const bcrypt 			= require('bcrypt');
const bcrypt_p 			= require('bcrypt-promise');
const jwt           	= require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('PolicyUser', {
        id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
        user_id: DataTypes.INTEGER,
        policy_id : DataTypes.INTEGER,
        years     : DataTypes.STRING,
        interest      : DataTypes.FLOAT,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    });

    Model.associate = function(models){
        this.Users = this.belongsTo(models.User, {foreignKey: 'user_id'});
    };

    Model.associate = function(models){
        this.Policy = this.belongsTo(models.Policy, {foreignKey: 'policy_id'});
    };

    Model.prototype.getJWT = function () {
        let expiration_time = parseInt(CONFIG.jwt_expiration);
        return "Bearer "+jwt.sign({user_id:this.id}, CONFIG.jwt_encryption, {expiresIn: expiration_time});
    };

    Model.prototype.toWeb = function (pw) {
        let json = this.toJSON();
        return json;
    };

    return Model;
};