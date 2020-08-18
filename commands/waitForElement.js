//waitforelement/////////////////////////////////////////
module.exports = (browser, element_to_wait, insertNewRepo, screenShotsFail, testName) => {
  return new Promise(resolve => {
    browser.waitForElementVisible(element_to_wait[1],
      25000,
      false,
      (res) => {
        insertNewRepo("Wait For Element", res.status == 0, element_to_wait, testName);
        screenShotsFail(browser, res.status !== 0, element_to_wait[0]);
        browser.pause(380);
        resolve()
      }
    );
  })
};
//////////////////////////////////////////////////////////
