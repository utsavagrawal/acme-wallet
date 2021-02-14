const jest = require("jest-mock");

const userService = {
  getUserDetails: jest.fn(() => {
    return {
      username: "acme-username",
      balance: Math.floor(Math.random() * 1000),
    };
  }),
};

module.exports = userService;
