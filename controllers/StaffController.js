const Staff          = require('../models').Staff;
const authService   = require('./../services/AuthService');

const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    const body = req.body;

    if(!body.unique_key && !body.email && !body.phone){
        return ReE(res, 'Please enter an email or phone number to register.');
    } else if(!body.password){
        return ReE(res, 'Please enter a password to register.');
    }else{
        let err, staff;

        [err, staff] = await to(authService.createStaff(body));

        if(err) return ReE(res, err, 422);
        return ReS(res, {message:'Successfully created new Staff.', staff:staff.toWeb(), token:staff.getJWT()}, 201);
    }
}
module.exports.create = create;

const get = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let staff = req.staff;

    return ReS(res, {staff:staff.toWeb()});
}
module.exports.get = get;

const update = async function(req, res){
    let err, staff, data
    staff = req.staff;
    data = req.body;
    staff.set(data);

    [err, staff] = await to(staff.save());
    if(err){
        if(err.message=='Validation error') err = 'The email address or phone number is already in use';
        return ReE(res, err);
    }
    return ReS(res, {message :'Updated Staff: '+staff.email});
}
module.exports.update = update;

const remove = async function(req, res){
    let staff, err;
    staff = req.staff;

    [err, staff] = await to(staff.destroy());
    if(err) return ReE(res, 'error occured trying to delete Staff');

    return ReS(res, {message:'Deleted Staff'}, 204);
}
module.exports.remove = remove;


const login = async function(req, res){
    const body = req.body;
    let err, staff;

    [err, staff] = await to(authService.authStaff(req.body));
    if(err) return ReE(res, err, 422);

    return ReS(res, {token:staff.getJWT(), staff:staff.toWeb()});
}
module.exports.login = login;