document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const clearButton = document.getElementById("clear");
    const calculateButton = document.getElementById("calculate");
    const numbers = document.querySelectorAll(".number");
    const operators = document.querySelectorAll(".operator");
    const sqrtButton = document.getElementById("sqrt");
    const percentButton = document.querySelector(".operator[value='%']");
    const memoryDivideButton = document.getElementById("memoryDivide");
    const memorySubtractButton = document.getElementById("memorySubtract");
    const memoryClearButton = document.getElementById("memoryClear");
    const entryButton = document.getElementById("entry");
  
    let expression = '';
  
    numbers.forEach(number => {
      number.addEventListener("click", function() {
        expression += this.value;
        display.value = expression;
      });
    });
  
    operators.forEach(operator => {
      operator.addEventListener("click", function() {
        if (this.value === '%' && expression.length > 0) {
          expression = expression.slice(0, -1) + (parseFloat(expression.slice(-1)) / 100);
        } else {
          expression += this.value;
        }
        display.value = expression;
      });
    });
  
    sqrtButton.addEventListener("click", function() {
      expression = Math.sqrt(eval(expression));
      display.value = expression;
    });
  
    clearButton.addEventListener("click", function() {
      expression = '';
      display.value = '';
    });
  
    memoryClearButton.addEventListener("click", function() {
      localStorage.removeItem("memory");
    });
  
    memoryDivideButton.addEventListener("click", function() {
      if (localStorage.getItem("memory") === null) {
        localStorage.setItem("memory", eval(expression));
      } else {
        localStorage.setItem("memory", parseFloat(localStorage.getItem("memory")) / eval(expression));
      }
    });
  
    memorySubtractButton.addEventListener("click", function() {
      if (localStorage.getItem("memory") === null) {
        localStorage.setItem("memory", -eval(expression));
      } else {
        localStorage.setItem("memory", parseFloat(localStorage.getItem("memory")) - eval(expression));
      }
    });
  
    entryButton.addEventListener("click", function() {
      expression = localStorage.getItem("memory") || '';
      display.value = expression;
    });
  
    calculateButton.addEventListener("click", function() {
      try {
        const result = eval(expression);
        display.value = result;
        expression = '';
      } catch (error) {
        display.value = 'Error';
      }
    });
  });
  