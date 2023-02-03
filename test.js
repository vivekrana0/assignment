// Name - Vivek Rana , Email - vivekranarajput@gmail.com, Portfolio - https://vivekrana.tech

function evaluate(expression) {
    let stack = [];
    let result = 0

  // check if the argument is just a number 

    if(typeof expression === 'number') {
     stack.push(expression)
    } else {

    // Split the expression into elements
  
    elements = [];
    let currentElement = "";
    
    for (let i = 0; i < expression.length; i++) {
      let char = expression[i];
      
      if (char === "(") {
        elements.push(char);

    // push the currentElement into elements as soon as we get " " and " "

      } else if (char === ")") {
        if (currentElement) {
          elements.push(currentElement);
          currentElement = "";
        }
        elements.push(char)
      } else if (char === " ") {
        if (currentElement) {
          elements.push(currentElement);
          currentElement = "";
        }

    // if we have a continuous string add the characters to the currentElement

      } else {
        currentElement += char;
      }
    }
    
    if (currentElement) elements.push(currentElement);
    
    console.log(elements)
    // Iterate over each element in the expression
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
  
  // Removing the last 2 elements from the stack as soon as we get ')' and use the last operator in the stack
      
      if(element === ')') {
          let e1 = parseInt(stack.pop())
          let e2 = parseInt(stack.pop())
          let operator = stack.pop()
          if (operator === 'multiply') {
            result = e1 * e2
          } else if (operator === 'add') {
           result = e1 + e2
          }
        stack.push(result)
        
    // Push the all the elements other then "(", ")"

      } else if(element !== '(') {
        stack.push(element)
      }
    }
      
    }
    
    // The result of the expression is the only item left on the stack
    return stack[0]
  }
  
  // Example usage:
  console.log(evaluate("(add 1 (multiply 2 3))"))
  console.log(evaluate("(multiply 3 (multiply (multiply 3 3) 3))"))
  
  