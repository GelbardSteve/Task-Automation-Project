const f = require("../../../exportsFunction");
const { contactISelectors } = require("./contactInformationSelectors");

const reports = require("../../../utils/reportsCreate");
const createNewRepo = reports.createNewReport;
const insertStatusRepo = reports.insertStatusReport;

f.deleteFromFolder(`../automation-check-flow-of-payment/reports/7.contact_information`);
module.exports = {
  contact_information: async function (browser, testNum, email) {
    const test_name = `7.contact_information/${testNum}`;
    createNewRepo(test_name);

    await f.waitForElement(
      browser,
      contactISelectors.emailAddress,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.insertValue(
      browser,
      contactISelectors.emailAddress,
      email,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.insertValue(
      browser,
      contactISelectors.mobilePhone,
      "+9720500000000",
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.waitForElement(
      browser,
      contactISelectors.continueButton,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.clickOnElement(
      browser,
      contactISelectors.continueButton,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
  },
};
