//insert vaue to wysiwyg by class (when it have # before the class)////////////////////////////////////////
module.exports = (browser, insert, insertNewRepo, screenShotsFail, testName, numInTheList
) => {
  return new Promise((resolve) => {
    browser.pause(1500, () => {
      browser.execute(
        function (selector, number) {
          return document.querySelectorAll(selector)[number].click();
        },
        [insert[1], numInTheList],
        (res) => {
          insertNewRepo("Click On Selector", res.status == 0, insert, testName);
          screenShotsFail(browser, res.status !== 0, insert[0]);
          browser.pause(380, () => {
            resolve();
          });
        }
      );
    });
  });
};
//////////////////////////////////////////////////////////
