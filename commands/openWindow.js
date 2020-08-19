// open browser and go to choosen url//////////////////////////
module.exports = (browser, url, insertNewRepo, screenShotsFail, testName) => {
  return new Promise(resolve => {
    browser
      .windowMaximize()
      .pause(1000)
      .url(url[1], (res) => {
        insertNewRepo("Open Window", res.status == 0, url, testName);
        screenShotsFail(browser, res.status !== 0, url);
        browser.pause(210, () => {
          resolve()
        });
      });
  });
};
///////////////////////////////////////////////////////////////
