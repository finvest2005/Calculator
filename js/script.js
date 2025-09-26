import { Calculator } from './calc.js';
const obj = Calculator();
const container = document.querySelector('.container');
container.addEventListener('click', obj.handleButtonClick);
