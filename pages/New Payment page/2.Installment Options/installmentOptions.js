const f = require("../../../exportsFunction");
const {
  installmentOptionsSelectors,
} = require("./installmentOptionsSelectors");

const reports = require("../../../utils/reportsCreate");
const createNewRepo = reports.createNewReport;
const insertStatusRepo = reports.insertStatusReport;
f.deleteFromFolder(`../Task-Automation-project/reports/3.installmentOptions`);
module.exports = {
  installmentOptions: async function (browser, testNum) {
    const test_name = `3.installmentOptions/${testNum}`;
    createNewRepo(test_name);

    await f.waitForElement(
      browser,
      installmentOptionsSelectors.allDefaultOptions,
      insertStatusRepo,
      f.saveScreenShots,
       test_name
    );
    await f.clickOnElement(
      browser,
      installmentOptionsSelectors.allDefaultOptions,
      insertStatusRepo,
      f.saveScreenShots,
       test_name
    );
    await f.clickOnElement(
      browser,
      installmentOptionsSelectors.continueButton,
      insertStatusRepo,
      f.saveScreenShots,
       test_name
    );
    await f.clickOnElement(
      browser,
      installmentOptionsSelectors.inStore,
      insertStatusRepo,
      f.saveScreenShots,
       test_name
    );
  },
};
