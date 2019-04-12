class FileUpload {
  constructor() {
    const multer = require("multer");

    var storage = multer.memoryStorage();
    return multer({ storage: storage });
  }
}

module.exports = FileUpload