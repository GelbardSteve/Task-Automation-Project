module.exports = {
  // Order Details Selectors
  paymentDetailsSelectors: {
    dragHandle: [
      "Drag Handle",
      "#root > div:nth-child(1) > div > div.layout-content--Eu5wJ > div > div.content--3JsLo > div.deposit-plan-content--1NHSL > div.slider-wrap--neu8b > div > div.drag-bar--5BfYK > div",
    ],
    moveDragHandle: [
      "Move Drag Handle",
      "#root > div:nth-child(1) > div > div.layout-content--Eu5wJ > div > div.content--3JsLo > div.deposit-plan-content--1NHSL > div.slider-wrap--neu8b > div > div.drag-bar--5BfYK > div",
      "translate(274.333px, -50%)",
    ],
    continueButton: [
      "Continue Button",
      "#root > div:nth-child(1) > div > div.layout-content--Eu5wJ > div > div.content--3JsLo > div.action-buttons--mhZ-P > button",
    ],
  },

  paymentSelectors: {

    cardholdersName: [
      "Cardholder's Name",
      "#cs-holdersName",
    ],
    cardNumber: [
      "Card Number",
      "#cs-number",
    ],
    expirationDate: [
      "Expiration Date",
      "#cs-expDate",
    ],
    securityCode: [
      "Security Code",
      "#cs-cvv",
    ],
    paymentContinueButton: [
      "Payent Continue Button",
      "#root > div:nth-child(1) > div > div.layout-content--Eu5wJ > div > div.content--3JsLo > form > div.action-buttons--mhZ-P > button",
    ],
    cardErrorValidationMessage: [
      "Error Validation Message",
      "#root > div:nth-child(1) > div > div.layout-content--Eu5wJ > div > div.content--3JsLo > form > div.input-wrap--3VQ78 > label > div > div.text--2DTUY.description--2xT7u.error-text--Gbmji",
    ],
  },
};
