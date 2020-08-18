//click on an selector////////////////////////////////////////
module.exports = (browser, click_selector, insertNewRepo, screenShotsFail, testName
) => {
  return new Promise((resolve) => {
    browser
    .pause(600)
    .execute(
      function (selector) {
        return document.querySelector(selector).click();
      },
      [click_selector[1]],
      (res) => {
        insertNewRepo(
          "Click On Selector",
          res.status == 0,
          click_selector,
          testName
        );
        screenShotsFail(browser, res.status !== 0, click_selector[0]);
        browser.pause(380, () => {
          resolve();
        });
      }
    );
  });
};
//////////////////////////////////////////////////////////
