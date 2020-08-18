//click on an selector////////////////////////////////////////
module.exports = (browser, element, insertNewRepo, screenShotsFail, testName) => {
  return new Promise((resolve) => {
    browser.pause(600, () => {
      browser.execute(
        function (selector, theNewStyle) {
          return (document.querySelector(
            selector
          ).style.transform = theNewStyle);
        },
        [element[1], element[2]],
        (res) => {
          insertNewRepo(
            "Change Selector Style",
            res.status == 0,
            element,
            testName
          );
          screenShotsFail(browser, res.status !== 0, element[0]);
          browser.pause(380, () => {
            resolve();
          });
        }
      );
    });
  });
};
//////////////////////////////////////////////////////////
