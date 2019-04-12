const Encryptions = require("../../helpers/encryptions");

const dbSchema = require("../../database/schema/index");
class User {
  constructor(options) {
    this.secret = "jwt_test_react";
    this._options = options;
    if (options) {
      this._id = options.id || null;
      this._name = options.name || null;
      this._email = options.email || null;
      this._password = options.password || null;
    }
  }

	decodeToken(token){
		return Encryptions.decodeJWT(token,this.secret);
	}

  getById(id) {
    return dbSchema.users.findById(this._id);
  }

  userList() {
    return dbSchema.users.find({}, { password: 0 });
  }

  searchUser(searchVal) {
    return dbSchema.users
      .find(
        {
          $or: [
            { email: new RegExp(searchVal, "i") },
            { name: new RegExp(searchVal, "i") }
          ]
        },
        {
          password: 0
        }
      )
      .then(users => {
        if (users.length > 0) return users;
        else throw { status: 404, msg: "No User Found" };
      });
  }

  auth() {
    let searchedUser = {};
    return dbSchema.users
      .findOne({ email: this._email })
      .then(user => {
        if (!user) throw { status: 403, msg: "Username Or Password Wrong" };
        searchedUser = user;
        return Encryptions.compareHash(this._password, searchedUser.password);
      })
      .then(passwordMatched => {
        if (passwordMatched) return searchedUser;
        else throw { status: 403, msg: "Username Or Password Wrong" };
      })
      .then(loggedInUser => Encryptions.generateJWT(loggedInUser, this.secret))
      .then(token => ({
        user: searchedUser,
        token
      }));
  }

  register() {
    return Encryptions.generateHash(this._password).then(pass =>
      dbSchema.users.create({
        ...this._options,
        password: pass
      })
    );
  }
}

module.exports = User;
