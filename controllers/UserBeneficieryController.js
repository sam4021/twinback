const Beneficiery = require('../models').UserBeneficiery;

const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err;

    let beneficiery_info = req.body;

    [err, beneficiery] = await to(Beneficiery.create(beneficiery_info));
    if(err) return ReE(res, err, 422);

    return ReS(res,{beneficiery:beneficiery.toWeb()}, 201);
}
module.exports.create = create;

const get = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let beneficiery = req.beneficiery;

    return ReS(res, {beneficiery:beneficiery.toWeb()});
}
module.exports.get = get;

const update = async function(req, res){
    let err, beneficiery, data;
    beneficiery = req.beneficiery;
    data = req.body;
    beneficiery.set(data);

    [err, beneficiery] = await to(beneficiery.save());
    if(err){
        return ReE(res, err);
    }
    return ReS(res, {beneficiery:beneficiery.toWeb()});
}
module.exports.update = update;

const remove = async function(req, res){
    let beneficiery, err;
    beneficiery = req.beneficiery;

    [err, beneficiery] = await to(beneficiery.destroy());
    if(err) return ReE(res, 'error occured trying to delete the beneficiery');

    return ReS(res, {message:'Deleted beneficiery'}, 204);
}
module.exports.remove = remove;
