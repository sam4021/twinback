'use strict';
const bcrypt 			= require('bcrypt');
const bcrypt_p 			= require('bcrypt-promise');
const jwt           	= require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('UsersBeneficiery', {
        id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
        user_id : DataTypes.INTEGER,
        firstname     : DataTypes.STRING,
        lastname      : DataTypes.STRING,
        surname      : DataTypes.STRING,
        email     : {type: DataTypes.STRING, allowNull: true, unique: true, validate: { isEmail: {msg: "Email invalid."} }},
        phone     : {type: DataTypes.STRING, allowNull: true, unique: true, validate: { len: {args: [7, 20], msg: "Phone number invalid, too short."}, isNumeric: { msg: "not a valid phone number."} }},
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    });

    // Model.associate = function(models){
    //     this.Users = this.hasOne(models.User);
    // };

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