const Permission = require('../models').PermissionsGroups;

const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err;

    let permission_info = req.body;

    [err, permission] = await to(Permission.create(permission));
    if(err) return ReE(res, err, 422);

    return ReS(res,{permission:permission.toWeb()}, 201);
}
module.exports.create = create;

const get = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let permission = req.permission;

    return ReS(res, {permission:permission.toWeb()});
}
module.exports.get = get;

const update = async function(req, res){
    let err, permission, data;
    permission = req.permission;
    data = req.body;
    permission.set(data);

    [err, permission] = await to(permission.save());
    if(err){
        return ReE(res, err);
    }
    return ReS(res, {permission:permission.toWeb()});
}
module.exports.update = update;

const remove = async function(req, res){
    let permission, err;
    permission = req.permission;

    [err, permission] = await to(permission.destroy());
    if(err) return ReE(res, 'error occured trying to delete the permission');

    return ReS(res, {message:'Deleted permission'}, 204);
}
module.exports.remove = remove;
