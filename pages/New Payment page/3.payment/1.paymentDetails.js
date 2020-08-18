const f = require("../../../exportsFunction");
const { paymentDetailsSelectors } = require("./paymentSelectors");

const reports = require("../../../utils/reportsCreate");
const createNewRepo = reports.createNewReport;
const insertStatusRepo = reports.insertStatusReport;

module.exports = {
  paymentsDetails: async function (browser, testNum) {
    const test_name = `4.paymentsDetails/${testNum}`;
    createNewRepo(test_name);

    await f.waitForElement(
      browser,
      paymentDetailsSelectors.dragHandle,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.changeSelectorStyle(
      browser,
      paymentDetailsSelectors.moveDragHandle,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.clickOnElement(
      browser,
      paymentDetailsSelectors.dragHandle,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.clickOnElement(
      browser,
      paymentDetailsSelectors.continueButton,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
  },
};
