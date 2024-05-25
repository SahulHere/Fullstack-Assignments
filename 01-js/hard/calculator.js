/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
    constructor() {
        this.result = 0;
    }

    add(number) {
        if (typeof number !== 'number') {
            throw new Error('Invalid input. Please provide a valid number.');
        }
        this.result += number;
    }

    subtract(number) {
        if (typeof number !== 'number') {
            throw new Error('Invalid input. Please provide a valid number.');
        }
        this.result -= number;
    }

    multiply(number) {
        if (typeof number !== 'number') {
            throw new Error('Invalid input. Please provide a valid number.');
        }
        this.result *= number;
    }

    divide(number) {
        if (typeof number !== 'number' || number === 0) {
            throw new Error('Invalid input. Please provide a non-zero number.');
        }
        this.result /= number;
    }

    clear() {
        this.result = 0;
    }

    getResult() {
        return this.result;
    }

    calculate(expression) {
        // Remove continuous spaces and validate expression
        const cleanedExpression = expression.replace(/\s+/g, '');
        if (!/^[\d+\-*/().\s]+$/.test(cleanedExpression)) {
            throw new Error('Invalid expression. Please provide a valid arithmetic expression.');
        }

        try {
            this.result = eval(cleanedExpression);
        } catch (error) {
            throw new Error('Error evaluating the expression. Please check your input.');
        }
    }
    
}

module.exports = Calculator;
