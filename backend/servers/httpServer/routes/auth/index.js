const router = require("express").Router();

const dbSchema = require("../../../../database/schema");
const apiValidator = require("../../../../helpers/validators/api_request.validator.js");

const User = require("../../../../services/user");
const Utility = require("../../../../utilities");

let { reqBodyValidator } = apiValidator;

router.route("/decodeToken/:token").get((req, res, next) => {
  let util = new Utility(req, res);
  let token = req.params.token;
  new User()
    .decodeToken(token)
    .then(obj => util.successResponseGenerator({...obj.payload}, "Valid Token"))
    .catch(err => util.errorResponseGenerator(err, 401));
});

router.route("/login").post((req, res, next) => {
  let util = new Utility(req, res);

  let requiredPayload = ["email", "password"];
  let validatePayload = reqBodyValidator(req, requiredPayload);

  if (validatePayload.error)
    return util.errorResponseGenerator(validatePayload.faultyKeys, 422);

  let payload = req.body;
  new User(payload)
    .auth()
    .then(userData =>
      util.successResponseGenerator(userData, "User Logged in.")
    )
    .catch(err => util.errorResponseGenerator(err, err.status));
});

router.route("/signup").post((req, res) => {
  let util = new Utility(req, res);

  let requiredPayload = ["name", "email", "password"];
  let validatePayload = reqBodyValidator(req, requiredPayload);

  if (validatePayload.error)
    return util.errorResponseGenerator(validatePayload.faultyKeys, 400);

  let payload = req.body;

  new User(payload)
    .register()
    .then(userData => util.successResponseGenerator({}, "user created"))
    .catch(err => util.errorResponseGenerator(err, 500));
});

module.exports = router;
