const router = require("express").Router();

router.route("/refreshToken").put((req, res, next) => {

});

router.route("/login").post((req, res, next) => {
  console.log("auth hit.");
});

router.route("/signup").get((req, res, next) => {
  console.log("signup hit");
});

module.exports = router;
