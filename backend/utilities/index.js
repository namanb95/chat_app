class Utility {
  constructor(req = null, res = null) {
    this._req = req;
    this._res = res;
  }

  successResponseGenerator(data, msg, status = 200) {
    return this._res.status(status).json({
      success: true,
      msg,
      data
    });
  }

  errorResponseGenerator(err, status = 400) {
    return this._res.status(status).json({
      success: false,
      data
    });
  }
}

module.exports = Utility;