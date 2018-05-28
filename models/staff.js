'use strict';
const bcrypt 			= require('bcrypt');
const bcrypt_p 			= require('bcrypt-promise');
const jwt           	= require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('Staff', {
        id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
        firstname     : DataTypes.STRING,
        lastname      : DataTypes.STRING,
        surname      : DataTypes.STRING,
        email     : {type: DataTypes.STRING, allowNull: true, unique: true, validate: { isEmail: {msg: "Email invalid."} }},
        phone     : {type: DataTypes.STRING, allowNull: true, unique: true, validate: { len: {args: [7, 20], msg: "Phone number invalid, too short."}, isNumeric: { msg: "not a valid phone number."} }},
        password  : DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    });

    Model.beforeSave((staff, options) => {
        let err;
        if (staff.changed('password')){
            let salt, hash
            [err, salt] = to(bcrypt.genSalt(10));
            if(err) TE(err.message, true);

            [err, hash] = to(bcrypt.hash(staff.password, salt));
            if(err) TE(err.message, true);

            staff.password = hash;
        }
    });

    Model.prototype.comparePassword = function (pw) {
        let err, pass
        if(!this.password) TE('password not set');

        [err, pass] = to(bcrypt_p.compare(pw, this.password));
        if(err) TE(err);

        if(!pass) TE('invalid password');

        return this;
    }

    Model.prototype.getJWT = function () {
        let expiration_time = parseInt(CONFIG.jwt_expiration);
        return "Bearer "+jwt.sign({staff_id:this.id}, CONFIG.jwt_encryption, {expiresIn: expiration_time});
    };

    Model.prototype.toWeb = function (pw) {
        let json = this.toJSON();
        return json;
    };

    return Model;
};