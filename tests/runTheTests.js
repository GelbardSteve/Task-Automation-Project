const { loginPage } = require("../pages/New Payment page/0.login_page/loginPage");
const { orderDetails } = require("../pages/New Payment page/1.order_details_component/OrderDetailsComponent");
const { installmentOptions } = require("../pages/New Payment page/2.Installment Options/installmentOptions");
const { paymentsDetails } = require("../pages/New Payment page/3.payment/1.paymentDetails");
const { payment } = require("../pages/New Payment page/3.payment/2.payment");
const { billing_component } = require("../pages/New Payment page/4.billing/billingComponent");
const { contact_information } = require("../pages/New Payment page/5.contact_information/contactInformation");
const { paymentSummary } = require("../pages/New Payment page/6.payment_summary/paymentSummary");
const { globalSelectors } = require("../pages/New Payment page/globalSelectors")

module.exports = {
  tags: ["runTheTests"],
  "Run The Tests": function (browser) {

    loginPage(browser, `0.loginPage`, true);
      function runTheTest(testNumber, amount, email, cardNumber, ExpirationDate) {
      return new Promise((res) => {
        orderDetails(browser, `${testNumber}.orderDetails`, amount);
        installmentOptions(browser, `${testNumber}.installmentOptions`);
        paymentsDetails(browser, `${testNumber}.paymentsDetails`);
        payment(browser, `${testNumber}.payment`, cardNumber, ExpirationDate);
        billing_component(browser, `${testNumber}.billingComponent`);
        contact_information(browser, `${testNumber}.contact_information`, email);
        paymentSummary(browser, `${testNumber}.paymentSummary`);
        res();
      });
    } runTheTest(0, 100, "test@test.com", "4111-1111-1111-1111", "02/22");

    
    for (let i = 1; i <= globalSelectors.howManyTime; i++){
      let randomNumber = Math.floor(Math.random() * (200 - 101 + 1) ) + 101;
      runTheTest(i, randomNumber, `test${randomNumber}@test.com`, "4111-1111-1111-1111", "02/22");
      randomNumber = "";
    }
    runTheTest("part Two", 100, `test@test.com`, "4222-2222-2222-2220", "10/20");
  },
};
