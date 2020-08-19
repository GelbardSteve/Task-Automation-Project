const f = require("../../../exportsFunction");
const { billingSelectors } = require("./billingSelectors");

const reports = require("../../../utils/reportsCreate");
const createNewRepo = reports.createNewReport;
const insertStatusRepo = reports.insertStatusReport;

module.exports = {
  billing_component: async function (browser, testNum) {
    const test_name = `6.billingComponent/${testNum}`;
    createNewRepo(test_name);

    await f.waitForElement(
      browser,
      billingSelectors.countryList,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.clickOnElement(
      browser,
      billingSelectors.countryList,
      insertStatusRepo,
      f.saveScreenShots,
      test_name
    );
    await f.clickOnSelectorFromList(
      browser,
      billingSelectors.countryListInput,
      insertStatusRepo,
      f.saveScreenShots,
      test_name,
      14
    );

    browser.pause(1000, async () => {
      await f.insertValue(
        browser,
        billingSelectors.streetAddress,
        "test",
        insertStatusRepo,
        f.saveScreenShots,
        test_name
      );
      await f.insertValue(
        browser,
        billingSelectors.number,
        "0500000000",
        insertStatusRepo,
        f.saveScreenShots,
        test_name
      );
      await f.insertValue(
        browser,
        billingSelectors.city,
        "test",
        insertStatusRepo,
        f.saveScreenShots,
        test_name
      );
      await f.insertValue(
        browser,
        billingSelectors.postalCode,
        "123456",
        insertStatusRepo,
        f.saveScreenShots,
        test_name
      );
      await f.clickOnElement(
        browser,
        billingSelectors.continueButton,
        insertStatusRepo,
        f.saveScreenShots,
        test_name
      );
    });
  },
};
