export function Calculator() {
  var self = {};
  var currentPressedButton, elem, operandOne, operation, previousPressedButton;
  operandOne = '';
  operation = '';
  previousPressedButton = 'none';
  currentPressedButton = 'none';
  elem = '';
  const tablo = document.querySelector('.tablo');
  const action = ['multiply', 'subtract', 'divide', 'add'];
  const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  function checkCurrBtnIsAction() {
    return action.indexOf(currentPressedButton) != -1;
  }
  function checkPrevBtnIsAction() {
    return action.indexOf(previousPressedButton) != -1;
  }
  function checkCurrBtnIsEqualSign() {
    return currentPressedButton == 'eqsign';
  }
  function checkOperationNotEmpty() {
    return operation != '';
  }
  function checkCurrBtnIsClearContent() {
    return currentPressedButton == 'clear';
  }
  function checkTabloLengthEqualOneSymbol() {
    return tablo.textContent.length == 1;
  }
  function checkCurrBtnIsBackspace() {
    return currentPressedButton == 'backspace';
  }
  function checkPrevBtnIsDigit() {
    return digit.indexOf(previousPressedButton) != -1;
  }
  function checkTabloHasNoPoints() {
    return tablo.textContent.indexOf('.') == -1;
  }
  function checkCurrBtnIsPoint() {
    return currentPressedButton == 'point';
  }
  function checkCurrBtnIsDigit() {
    return digit.indexOf(currentPressedButton) != -1;
  }
  function checkTabloIsNotOneDigitZero() {
    return tablo.textContent != '0';
  }
  function checkPrevBtnIsBackspace() {
    return previousPressedButton == 'backspace';
  }

  function handleButtonClick(e) {
    elem = e.target;
    previousPressedButton = currentPressedButton;
    currentPressedButton = elem.id;
    console.log(
      `(id=${elem.id} pressed) (prevBtn=${previousPressedButton}) (currBtn=${currentPressedButton})`
    );
    console.log('checkCurrBtnIsAction ', checkPrevBtnIsBackspace());
  }
  self.handleButtonClick = handleButtonClick;
  return self;
}
