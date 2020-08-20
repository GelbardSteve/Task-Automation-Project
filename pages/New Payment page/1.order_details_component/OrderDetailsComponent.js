const f = require("../../../exportsFunction");
const { orderDetailsSelectors } = require("./orderDetailsSelectors");

const reports = require("../../../utils/reportsCreate");
const createNewRepo = reports.createNewReport;
const insertStatusRepo = reports.insertStatusReport;

f.deleteFromFolder(`../Task-Automation-project/reports/2.orderDetails`);
module.exports = {
  orderDetails: async function (browser, testNum, amount) {
    const test_name = `2.orderDetails/${testNum}`;
    createNewRepo(test_name);

    browser.pause(2000, () => {
      browser.execute(
        function (selector) {
          return document.querySelector(selector);
        },
        [orderDetailsSelectors.newPaymentButton[1]],
        async (res) => {
          if (res.value !== null) {
            await f.clickOnElement(
              browser,
              orderDetailsSelectors.newPaymentButton,
              insertStatusRepo,
              f.saveScreenShots,
              test_name
            );
          }
        }
      );
    });

    await f.waitForElement(
      browser,
      orderDetailsSelectors.totalAmountInput,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.insertValue(
      browser,
      orderDetailsSelectors.totalAmountInput,
      amount,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.clickOnElement(
      browser,
      orderDetailsSelectors.currency,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.arrowDown(
      browser, 
      insertStatusRepo, 
      f.saveScreenShots, 
      test_name
    );
    await f.arrowDown(
      browser, 
      insertStatusRepo, 
      f.saveScreenShots, 
      test_name
    );
    await f.pressEnter(
      browser, 
      insertStatusRepo, 
      f.saveScreenShots, 
      test_name
    );
    await f.waitForElement(
      browser,
      orderDetailsSelectors.orderIdNumber,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.insertValue(
      browser,
      orderDetailsSelectors.orderIdNumber,
      "steve",
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.clickOnElement(
      browser,
      orderDetailsSelectors.continueButton,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
  },
};
