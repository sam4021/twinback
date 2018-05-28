'use strict';
const bcrypt 			= require('bcrypt');
const bcrypt_p 			= require('bcrypt-promise');
const jwt           	= require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('PermissionsGroups', {
        id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
        title     : DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    });

    Model.associate = function(models){
        this.PermissionsGroups = this.belongsToMany(models.PermissionsGroups, {as:'group', through: 'PermissionsChildsGroup'});
    };

    Model.prototype.toWeb = function (pw) {
        let json = this.toJSON();
        return json;
    };

    return Model;
};