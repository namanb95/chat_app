const router       = require("express").Router();
const dbSchema     = require("../../../../database/schema");
const apiValidator = require("../../../../helpers/validators/api_request.validator.js");

const User    = require("../../../../services/user");
const Utility = require("../../../../utilities");

let { reqBodyValidator } = apiValidator;

router.route("/refreshToken").put((req, res, next) => {});

router.route("/login").post((req, res, next) => {
  let requiredPayload = ["email", "password"];
  let validatePayload = reqBodyValidator(req, requiredPayload);

  if (validatePayload.error) {
    return res.status(422).json({
      success: false,
      data: validatePayload.faultyKeys
    });
  }
});

router.route("/signup").post((req, res) => {

  let requiredPayload = ["name", "email", "password"];
  let validatePayload = reqBodyValidator(req, requiredPayload);

  if (validatePayload.error)
    new Utility(req, res).errorResponseGenerator(validatePayload.faultyKeys,400);

  let payload = req.body;

  new User(payload)
    .register()
    .then(userData => new Utility(req, res).successResponseGenerator(userData, "user created"))
    .catch(err => new Utility(req, res).errorResponseGenerator(err, 500));
});

module.exports = router;
