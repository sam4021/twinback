const Policy = require('../models').PolicyUser;

const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, policy;

    let policy_info = req.body;

    [err, polUser] = await to(Policy.create(policy_info));
    if(err) return ReE(res, err, 422);

    return ReS(res,{policy_User:polUser.toWeb()}, 201);
}
module.exports.create = create;

const get = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let policy = req.policy;

    return ReS(res, {policy_user:policy.toWeb()});
}
module.exports.get = get;

const update = async function(req, res){
    let err, policy, data;
    policy = req.policy;
    data = req.body;
    policy.set(data);

    [err, policy] = await to(policy.save());
    if(err){
        return ReE(res, err);
    }
    return ReS(res, {policy_user:policy.toWeb()});
}
module.exports.update = update;

const remove = async function(req, res){
    let policy, err;
    policy = req.policy;

    [err, policy] = await to(policy.destroy());
    if(err) return ReE(res, 'error occured trying to delete the policy');

    return ReS(res, {message:'Deleted policy'}, 204);
}
module.exports.remove = remove;
