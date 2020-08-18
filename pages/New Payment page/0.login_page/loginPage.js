const f = require("../../../exportsFunction");
const { loginSelectors } = require("./loginSelectors");

const reports = require("../../../utils/reportsCreate");
const createNewRepo = reports.createNewReport;
const insertStatusRepo = reports.insertStatusReport;

const deleteFolder = "../automations_project/reports/screenShots";
module.exports = {
  loginPage: async function (browser, testNum) {
    const test_name = `1.loginPage/${testNum}`;
    createNewRepo(test_name);
    f.deleteFromFolder(deleteFolder);

    await f.openWindow(
      browser,
      loginSelectors.url,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.waitForElement(
      browser,
      loginSelectors.newPaymentButton,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.clickOnSelector(
      browser,
      loginSelectors.newPaymentButton,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.insertValue(
      browser,
      loginSelectors.userName,
      "test_vpos",
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.insertValue(
      browser,
      loginSelectors.password,
      "Test123!",
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.waitForElement(
      browser,
      loginSelectors.signInButton,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.clickOnElement(
      browser,
      loginSelectors.signInButton,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
  },
};
