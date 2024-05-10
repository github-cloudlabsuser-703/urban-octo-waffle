const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (firstNumber) => {
  rl.question('Enter the second number: ', (secondNumber) => {
    rl.question('Enter the operator ( +, -, *, / ): ', (operator) => {
      let result;
      firstNumber = parseFloat(firstNumber);
      secondNumber = parseFloat(secondNumber);

      switch (operator) {
        case '+':
          result = firstNumber + secondNumber;
          break;
        case '-':
          result = firstNumber - secondNumber;
          break;
        case '*':
          result = firstNumber * secondNumber;
          break;
        case '/':
          if (secondNumber !== 0) {
            result = firstNumber / secondNumber;
          } else {
            console.log('Error! Division by zero is not allowed.');
            rl.close();
            return;
          }
          break;
        default:
          console.log('Invalid operator! Please enter one of ( +, -, *, / ).');
          rl.close();
          return;
      }

      console.log(`The result is: ${result}`);
      rl.close();
    });
  });
});


const calculate = require('./calculate');

test('adds 1 + 2 to equal 3', () => {
  expect(calculate(1, 2, '+')).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(calculate(5, 3, '-')).toBe(2);
});

test('multiplies 3 * 4 to equal 12', () => {
  expect(calculate(3, 4, '*')).toBe(12);
});

test('divides 10 / 2 to equal 5', () => {
  expect(calculate(10, 2, '/')).toBe(5);
});

test('throws error when dividing by zero', () => {
  expect(() => calculate(10, 0, '/')).toThrow('Error! Division by zero is not allowed.');
});

test('throws error when invalid operator is used', () => {
  expect(() => calculate(10, 2, 'invalid')).toThrow('Invalid operator! Please enter one of ( +, -, *, / ).');
});