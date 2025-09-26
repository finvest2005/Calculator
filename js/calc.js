export function Calculator() {
  var self = {};
  var currentPressedButton, elem, operandOne, operation, previousPressedButton;
  operandOne = '';
  operation = '';
  previousPressedButton = 'none';
  currentPressedButton = 'none';
  elem = '';
  const action = ['multiply', 'subtract', 'divide', 'add'];
  function checkCurrBtnIsAction() {
    return action.indexOf(currentPressedButton) != -1;
  }
  function handleButtonClick(e) {
    elem = e.target;
    previousPressedButton = currentPressedButton;
    currentPressedButton = elem.id;
    console.log(
      `(id=${elem.id} pressed) (prevBtn=${previousPressedButton}) (currBtn=${currentPressedButton})`
    );
    console.log('checkCurrBtnIsAction ', checkCurrBtnIsAction());
  }
  self.handleButtonClick = handleButtonClick;
  return self;
}
