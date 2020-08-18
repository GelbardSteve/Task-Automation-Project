module.exports = (browser, insertNewRepo, screenShotsFail, testName) => {
    return new Promise((resolve) => {
      browser.keys(browser.Keys.ARROW_DOWN, (res) => {
        insertNewRepo("Down Keyboard", res.status == 0, "Down Keyboard", testName);
        screenShotsFail(browser, res.status !== 0, "Down Keyboard");
        browser.pause(380);
      });
      resolve();
    });
  };
  