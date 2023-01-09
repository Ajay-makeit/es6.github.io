function runTemplateLiteralCode() {
    const name = 'John';
    const greeting = `Hello, ${name}!`;
    console.log(greeting);
  
    const output = document.getElementById('template-literal-runner');
    output.textContent = greeting;
  }
  
function runArrowFunctionCode() {
    const add = (a, b) => a + b;
    console.log(add(1, 2));
  
    const output = document.getElementById('arrow-function-runner');
    output.textContent = add(1, 2);
}


function runSpreadOperatorCode() {
    const numbers = [1, 2, 3];
    console.log(Math.max(...numbers));
  
    const output = document.getElementById('spread-operator-runner');
    output.textContent = Math.max(...numbers);
}
  
function runDestructuringAssignmentCode() {
    const person = { name: 'John', age: 30 };
    const { name, age } = person;
    console.log(name);
    console.log(age);
  
    const output = document.getElementById('destructuring-assignment-runner');
    output.textContent = `${name}, ${age}`;
}
