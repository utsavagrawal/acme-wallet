//load static role data
const admin = require("../util/roles");

const checkAuthentication = function (req, res, next) {
  const token = req.get("X-CLIENT-TOKEN");

  //this should have been saved in the create token api call.
  req.session["token"] = token;
  req.session.roles = admin;

  //alphanumeric check
  const regex = /^[a-zA-Z0-9_]*$/;
  if (!regex.test(token) || req.session.token !== token) {
    return res.send({ error: 1, msg: "Incorrect Token", data: {} });
  }

  next();
};

module.exports = checkAuthentication;
