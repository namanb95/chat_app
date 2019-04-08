const dbSchema = require("../../database/schema/index");

class User {
  constructor(options) {
		this._options    = options
    this._id       = options.id || null;
    this._name     = options.name || null;
    this._email    = options.email || null;
    this._password = options.password || null;
  }

  getById(id) {
    return dbSchema.users.findById(this._id);
  }

  register() {
    return dbSchema.users.create({
      ...this._options
    });
  }
}

module.exports = User;
