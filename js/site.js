//get the values from the Page
//start or controller function
function getValues() {
  //get values from the page
  let startValue = document.getElementById('startValue').value;
  let endValue = document.getElementById('endValue').value;

  //We need to validate our input
  //parse into integers with build-in function
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    //we need to call generateNumbers
    let numbers = generateNumbers(startValue, endValue);
    //we need to call displayNumbers
    displayNumbers(numbers);
  } else {
    alert('You must enter integers');
  }
}

//generate numbers from startvalue to the endValue
//logic functions(s)
function generateNumbers(sValue, eValue) {
  let numbers = [];

  //get all numbers from start to end
  for (let i = sValue; i <= eValue; i++) {
    //this will execute in a loop until index = eValue
    numbers.push(i);
  }
  return numbers;
}

//display the numbers and mark even numbers in bold
//display or view functions
function displayNumbers(numbers) {
  let templateRows = '';

  for (let i = 0; i < numbers.length; i++) {
    let className = 'even';

    let number = numbers[i];

    if (number % 2 == 0) {
      className = 'even';
    } else {
      className = 'odd';
    }
    templateRows = templateRows + `<tr><td class="${className}">${number}</td></tr>`;
  }

  document.getElementById('results').innerHTML = templateRows;
}
