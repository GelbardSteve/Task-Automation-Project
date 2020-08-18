const f = require("../../../exportsFunction");
const { paymentSummarySelectors } = require("./paymentSummarySelectors");

const reports = require("../../../utils/reportsCreate");
const createNewRepo = reports.createNewReport;
const insertStatusRepo = reports.insertStatusReport;

module.exports = {
  paymentSummary: async function (browser, testNum) {
    const test_name = `8.paymentSummary/${testNum}`;
    createNewRepo(test_name);

    await f.waitForElement(
      browser,
      paymentSummarySelectors.canvasImg,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );

    browser
      .moveToElement(paymentSummarySelectors.canvasImg[1], 594.1666870117188, 73) // 900 is X offset
      .mouseButtonClick(0, async () => {
        await f.pause(browser, 900);
        await f.waitForElement(
          browser,
          paymentSummarySelectors.confirmPaymentButton,
          insertStatusRepo,
          f.saveScreenShots,
          test_name
        );
        await f.clickOnSelector(
          browser,
          paymentSummarySelectors.confirmPaymentButton,
          insertStatusRepo,
          f.saveScreenShots,
          test_name
        );
        await f.clickOnElement(
          browser,
          paymentSummarySelectors.goHomeButton,
          insertStatusRepo,
          f.saveScreenShots,
          test_name
        );
      });
  },
};
