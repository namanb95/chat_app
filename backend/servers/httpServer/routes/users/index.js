const router       = require("express").Router();
const dbSchema     = require("../../../../database/schema");
const apiValidator = require("../../../../helpers/validators/api_request.validator.js");
const User         = require("../../../../services/user");
const Utility      = require("../../../../utilities");
const FileUpload	= require("../../../../helpers/fileUpload")
let { reqBodyValidator } = apiValidator;



router.route("/getUsers").get((req, res) => {
  let util = new Utility(req, res);
  new User()
    .userList()
    .then(users => util.successResponseGenerator(users, "users found"))
    .catch(err => util.errorResponseGenerator(err));
});

router.route("/searchUser").post(new FileUpload().single("file"),(req, res) => {
	console.log(req.file)
	let util            = new Utility(req, res);
	let mandatoryField  = ["searchVal"];
	let validatePayload = reqBodyValidator(req, mandatoryField);

  if (validatePayload.error)
		return util.errorResponseGenerator(validatePayload.faultyKeys, 422);
		
  let { searchVal } = req.body;
  new User()
    .searchUser(searchVal)
    .then(users => util.successResponseGenerator(users, "users found"))
    .catch(err => util.errorResponseGenerator(err.msg, err.status));
});

router.route("/")

module.exports = router;
