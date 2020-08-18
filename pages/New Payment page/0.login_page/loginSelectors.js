module.exports = {
  // Order Details Selectors
  loginSelectors: {
    url: ["URL", "https://vpos.sandbox.splitit.com/#/intro"],

    newPaymentButton: [
      "New Payment Button",
      "#root > div:nth-child(1) > div > div.aside--1wioY > div.actions--2oSpM > div:nth-child(1) > button",
    ],
    userName: ["User Name", "#cs-username"],

    password: ["Password", "#cs-password"],

    signInButton: [
      "Sign In Button",
      "#root > div:nth-child(1) > div.auth-flow--3qP-r > div > form > div > button",
    ],
  },
};
