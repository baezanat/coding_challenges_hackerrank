/*
Operations:
    1 = add element to end of queue (push into stack)
    2 = remove from front of stack (unshift?)
    3 = Print element in front (print element at index 0)

INPUT: string
OUTPUT: no return value, just print where needed

ALGORITHM:
- Split the string to get an array with the instructions to follow. Call it instructions.
- Declare an array that will be our stack. Set it equal to the first value in instructions.
- Declare an array that will be the elements.
- Iterate over the array starting at index 1.
    - If stack[-1] === '1', push current into elements
    - If stack[-1] === '2', shift elements 
    - If stack[-1] === '3', print elements[0]
*/

function processData(input) {
  let instructions = [];
  let elements = [];
  let given = input.split(/\s|\n/);
  if (given[0] === "1") {
    instructions.push(given[0]);
  }
  for (let index = 1; index < given.length; index++) {
    const current = given[index];
    const lastInstruction =
      instructions.length > 0 ? instructions[instructions.length - 1] : null;
    if (lastInstruction && lastInstruction === "1") {
      elements.push(current);
      instructions.pop();
    } else if (current === "1") {
      instructions.push(current);
    } else if (current === "2") {
      elements.shift();
    } else if (current === "3") {
      console.log(elements[0]);
      instructions.push(current);
    }
  }
}

console.log(processData("10 1 42 2 1 14 3 1 28 3 1 60 1 78 2 2"));
