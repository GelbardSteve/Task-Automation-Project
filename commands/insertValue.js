//insert value to element/////////////////////////////////////
module.exports = (browser, data, text, insertNewRepo, screenShotsFail, testName, waitforelement) => {
  return new Promise(resolve => {
    if(waitforelement) {
      browser
      .waitForElementVisible(data[1], 30000, false)
    }
    browser
      .setValue(data[1], text, (res) => {
        insertNewRepo("Insert Text", res.status == 0, data, testName);
        screenShotsFail(browser, res.status !== 0, data[0]);
        browser.pause(350);
      });
    resolve();
  });
};
/////////////////////////////////////////////////////////////
