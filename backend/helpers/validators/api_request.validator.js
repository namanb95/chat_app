exports.reqBodyValidator = (request, keys) => {
	let body       = request.body;
  let faultyKeys = [];

  keys.map(key => {
    if (key in body) {
      if (body[key] === "")
        faultyKeys.push({ key, msg: `${key} can't be blank` });
    } else faultyKeys.push({ key, msg: `${key} is required field` });
  });

  return { error: faultyKeys.length > 0 ? true : false, faultyKeys };
};
