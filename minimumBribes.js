/*
INPUT: array of final order
OUTPUT: print integer (number of swaps) or 'too chaotic'
RULES:
- any number can move ahead at most twice
 */

function minimumBribes(q) {
  let bribes = 0;
  for (let index = 0; index < q.length; index++) {
    let expectedNum = index + 1;
    let actualNum = q[index];
    let difference = q[index] - expectedNum;
    // If a number is ahead by > 2, log 'Too chaotic'
    if (difference > 2) {
      console.log("Too chaotic");
      return;
    }
    // We'll look at the numbers ahead of the current actualNum.
    // We need to consider only the numbers starting from the position where the
    // number was before being bribed - 1 to get the index for the original position,
    // and again -1 to include the position itself,
    // up to the index of the number right now. So, from the number's initial
    // position to its current position.
    const numbersAhead = q.slice(Math.max(0, q[index] - 2), index);
    numbersAhead.forEach((n) => (bribes = n > actualNum ? bribes + 1 : bribes));
  }
  console.log(bribes);
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]); // should print out 7
