const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class Encryptions {
  static generateHash(rawStr) {
    return bcrypt.genSalt(10).then(salt => bcrypt.hash(rawStr, salt));
  }

  static compareHash(rawStr, hashedStr) {
    return bcrypt.compare(rawStr, hashedStr);
  }

  static generateJWT(payload, secretKey, expiration = "6h") {
    return new Promise((res, rej) => {
      jwt.sign(
        { payload },
        secretKey,
        { expiresIn: expiration },
        (err, token) => {
          if (err) rej(err);
          res(token);
        }
      );
    });
  }

  static decodeJWT(token, secretKey) {
    return new Promise((res, rej) => {
      jwt.verify(token, secretKey, (err, decoded) => {
        if (err) rej(err);
        res(decoded);
      });
    });
  }
}

module.exports = Encryptions;
