var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
const checkAuthentication = require("./authentication/tokenAuth");
const searchTree = require("./util/searchTree");
const userService = require("./service/user.service");
var app = express();

// Use the session middleware
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 60000 },
  })
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/wallet/balance", checkAuthentication, async (req, res) => {
  //mock db function
  const userData = userService.getUserDetails();
  try {
    //user authorization
    const resultNode = await searchTree.search(req.session.roles, "WalletUser");
    if (!resultNode) {
      res.send({
        error: 0,
        msg: "User Details",
        data: { username: userData.username },
      });
    } else {
      res.send({
        error: 0,
        msg: "User Details",
        data: { username: userData.username, balance: userData.balance },
      });
    }
  } catch (error) {
    res.send({ error: 1, msg: "Internal Server Error", data: error });
  }
});

app.listen(2000, () => {
  console.log(`Example app listening at http://localhost:2000`);
});
