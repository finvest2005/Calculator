const container = document.querySelector('.container');
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
container.addEventListener('click', function (e) {
  const elem = e.target;
  if (elem.className == 'btn') {
    if (digits.includes(+elem.id)) {
      elem.style.backgroundColor = 'pink';
    }
    console.log(elem.id);
  }
  if (elem.className == 'clear') {
    elem.style.backgroundColor = 'green';
    console.log(elem.id);
  }
  if (elem.className == 'backspace') {
    elem.style.backgroundColor = 'red';
    console.log(elem.id);
  }
});
