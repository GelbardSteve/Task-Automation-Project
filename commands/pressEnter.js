module.exports = (browser, insertNewRepo, screenShotsFail, testName) => {
  return new Promise((resolve) => {
    browser.keys(browser.Keys.ENTER, (res) => {
      insertNewRepo("Press On Enter", res.status == 0, "Enter", testName);
      screenShotsFail(browser, res.status !== 0, "TAB");
      browser.pause(350, () => {
        resolve();
      });
    });
  });
};
