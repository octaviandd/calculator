const clearBtn = document.getElementById('clear')
const deleteBtn = document.getElementById('delete')
const dotBtn = document.querySelector('.button')
const displayValElement = document.getElementById('display-first')
const displayVal2Element = document.getElementById('display-second')

const numButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')


var displayVal = '0';
var secondDisplay;
var evaluateStringArray = [];


var updateDisplayVal = (clickObj) => {
  var btnText = clickObj.target.innerText
  if (displayVal === '0') {
    displayVal = '';
  }  
    
  if(displayVal.includes('.') && btnText === '.'){
    return
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
 


numButtons.forEach((button) =>{
  button.addEventListener('click', updateDisplayVal, false)
})

dotBtn.addEventListener('click', updateDisplayVal)


operatorButtons.forEach((operator) =>{
  operator.addEventListener('click', performOperation, false)
})


clearBtn.onclick = () => {
  displayVal = '0'
  secondDisplay = undefined
  displayValElement.innerHTML = '0'
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
