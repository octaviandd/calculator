// 1 - 9

const oneBtn = document.getElementById('1')
const twoBtn = document.getElementById('2')
const threeBtn = document.getElementById('3')
const fourBtn = document.getElementById('4')
const fiveBtn = document.getElementById('5')
const sixBtn = document.getElementById('6')
const sevenBtn = document.getElementById('7')
const eightBtn = document.getElementById('8')
const nineBtn = document.getElementById('9')
const zeroButton = document.getElementById('0')


// ., +, ÷, =, -,*

const clearBtn = document.getElementById('clear')
const deleteBtn = document.getElementById('delete')
const dotBtn = document.getElementById('.')
const displayValElement = document.getElementById('display-first')
const displayVal2Element = document.getElementById('display-second')

const numButtons = document.getElementsByClassName('number')
const operatorButtons = document.getElementsByClassName('operator')


var displayVal = '0';
var secondDisplay;
var evaluateStringArray = [];


var updateDisplayVal = (clickObj) => {
  var btnText = clickObj.target.innerText
  if (displayVal === '0') {
    displayVal = '';
  }
  displayVal += btnText
  displayValElement.innerHTML = displayVal
}

var performOperation = (clickObj) => {
  var operator = clickObj.target.innerText

  switch (operator) {
    case '+':
      secondDisplay = displayVal;
      displayVal = '';
      displayVal2Element.innerHTML = secondDisplay + ' + '
      displayValElement.innerHTML = displayVal;
      evaluateStringArray.push(secondDisplay);
      evaluateStringArray.push('+');
      break;

    case '-':
      secondDisplay = displayVal;
      displayVal = '';
      displayVal2Element.innerHTML = secondDisplay + ' - '
      displayValElement.innerHTML = displayVal;
      evaluateStringArray.push(secondDisplay)
      evaluateStringArray.push('-')
      break

    case '÷':
      secondDisplay = displayVal;
      displayVal = '';
      displayVal2Element.innerHTML = secondDisplay + ' ÷ '
      displayValElement.innerHTML = displayVal;
      evaluateStringArray.push(secondDisplay);
      evaluateStringArray.push('/');
      break

    case '*':
      secondDisplay = displayVal;
      displayVal = '';
      displayVal2Element.innerHTML = secondDisplay + ' * '
      displayValElement.innerHTML = displayVal;
      evaluateStringArray.push(secondDisplay);
      evaluateStringArray.push('*');
      break

    case '=':
      evaluateStringArray.push(displayVal);
      var evaluate = eval(evaluateStringArray.join(' '));
      displayVal = evaluate + '';
      displayValElement.innerHTML = displayVal;
      displayVal2Element.innerHTML = evaluateStringArray.toString().replace(/,/g, '').replace(/\//g, '÷') + ' = '
      evaluateStringArray = [];
      break
    default:
      break
  }
}


for (var i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener('click', updateDisplayVal, false)
}

for (var i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', performOperation, false)
}


clearBtn.onclick = () => {
  displayVal = '0'
  secondDisplay = undefined
  displayValElement.innerHTML = displayVal
  displayVal2Element.innerHTML = '0'
}

deleteBtn.onclick = () => {
  if (displayValElement.innerHTML.length > 0) {
    displayValElement.innerHTML = displayValElement.innerHTML.substr(0, displayValElement.innerHTML.length - 1)
    displayVal = displayValElement.innerHTML
    if (displayVal === '') {
      displayValElement.innerHTML = '0'
    }
    if (displayVal2Element === '') {
      displayVal2Element.innerHTML = '0'
    }
  }
}
