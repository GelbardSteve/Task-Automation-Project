const f = require("../../../exportsFunction");
const { paymentSelectors } = require("./paymentSelectors");

const reports = require("../../../utils/reportsCreate");
const createNewRepo = reports.createNewReport;
const insertStatusRepo = reports.insertStatusReport;

f.deleteFromFolder(`../automation-check-flow-of-payment/reports/5.payment`);
module.exports = {
  payment: async function (browser, testNum, cardNumber, expirationDate) {
    const test_name = `5.payment/${testNum}`;
    createNewRepo(test_name);

    await f.waitForElement(
      browser,
      paymentSelectors.cardholdersName,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.insertValue(
      browser,
      paymentSelectors.cardholdersName,
      "steve",
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.insertValue(
      browser,
      paymentSelectors.cardNumber,
      cardNumber,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.insertValue(
      browser,
      paymentSelectors.expirationDate,
      expirationDate,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.insertValue(
      browser,
      paymentSelectors.securityCode,
      "132",
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.clickOnElement(
      browser,
      paymentSelectors.paymentContinueButton,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );

    browser.pause(2000, () => {
      browser.execute(
        function (selector) {
          return document.querySelector(selector);
        },
        [paymentSelectors.cardErrorValidationMessage[1]],
        async (res) => {
          if (res.value !== null) {
            await f
              .waitForElement(
                browser,
                paymentSelectors.cardErrorValidationMessage,
                insertStatusRepo,
                f.saveScreenShots,
                test_name
              )
              .then(async (res) => {
                browser.end(() => {
                  process.exit();
                });
              });
          }
        }
      );
    });
  },
};
