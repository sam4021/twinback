const express 			= require('express');
const router 			= express.Router();

 const UserController 	= require('./../controllers/UserController');
 const UserBeneficieryController 	= require('./../controllers/UserBeneficieryController');
 const StaffController 	= require('./../controllers/StaffController');
 const PermissionsController = require('./../controllers/PermissionsController');
 const PolicyUserController = require('./../controllers/PolicyUserController');

const passport      	= require('passport');
const path              = require('path');


require('./../middleware/passport')(passport)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({status:"success", message:"Parcel Pending API", data:{"version_number":"v1.0.0"}})
});


router.post(    '/users',           UserController.create);                                                    // C
router.get(     '/users',           passport.authenticate('jwt', {session:false}), UserController.get);        // R
router.put(     '/users',           passport.authenticate('jwt', {session:false}), UserController.update);     // U
router.delete(  '/users',           passport.authenticate('jwt', {session:false}), UserController.remove);     // D
router.post(    '/users/login',     UserController.login);
router.get(     '/users/beneficiery/:user',passport.authenticate('jwt', {session:false}), UserBeneficieryController.get); 
router.post(    '/users/beneficiery/:user',passport.authenticate('jwt', {session:false}), UserBeneficieryController.post);
router.put(     '/users/beneficiery/:user',passport.authenticate('jwt', {session:false}), UserBeneficieryController.update); 

router.post(    '/staff',           StaffController.create);                                                    // C
router.get(     '/staff',           passport.authenticate('jwt', {session:false}), StaffController.get);        // R
router.put(     '/staff',           passport.authenticate('jwt', {session:false}), StaffController.update);     // U
router.delete(  '/staff',           passport.authenticate('jwt', {session:false}), StaffController.remove);     // D
router.post(    '/staff/login',     StaffController.login);

router.post(    '/policy_user/:user',     PolicyUserController.create);                                                    // C
router.get(     '/policy_user/:user',     passport.authenticate('jwt', {session:false}), PolicyUserController.get);        // R
router.put(     '/policy_user/:user',     passport.authenticate('jwt', {session:false}), PolicyUserController.update);     // U
router.delete(  '/policy_user/:user',     passport.authenticate('jwt', {session:false}), PolicyUserController.remove);     // D

router.post(    '/policy',     PolicyController.create);                                                    // C
router.get(     '/policy',     passport.authenticate('jwt', {session:false}), PolicyController.get);        // R
router.put(     '/policy/:policy',     passport.authenticate('jwt', {session:false}), PolicyController.update);     // U
router.delete(  '/policy/:policy',     passport.authenticate('jwt', {session:false}), PolicyController.remove);     // D

module.exports = router;