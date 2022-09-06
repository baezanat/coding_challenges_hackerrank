/*
NOTES:
- balanced brackets means:
    - no unmatched brackets
        - same number of opening and closing brackets
        - if we keep track of number of opening and closing brackets as we iterate over the string,
            the number of opening - closing is always >= 0
    - Subset within a balanced pair must also be balanced
        - This means that the first half of the string must have opening brackets that correspond
            exactly to the second half of the string reversed.
    - if the length of the string is even, the string is unbalanced


INPUT: string with brackets of type {, ( or [])}
OUTPUT: string, 'YES' or 'NO'
*/

function isBalanced(s) {
  //Find first closing bracket
  //Check if preceding char is the corresponding oppening bracket
  //if it is not, return 'NO'
  // if it is, create a new test string without the two balanced brackets and do it again
  const isOdd = (str) => {
    return str.length % 2 !== 0;
  };
  const isClosing = (s) => {
    return ["]", "}", ")"].includes(s);
  };

  const match = (bracket) => {
    switch (bracket) {
      case ")":
        return "(";
        break;
      case "]":
        return "[";
        break;
      case "}":
        return "{";
        break;
      default:
        return "";
    }
  };

  if (isOdd(s)) {
    return "NO";
  }
  if (s.split("").every((char) => !isClosing(char))) {
    return "NO";
  }
  if (s.length === 2 && ["()", "[]", "{}"].includes(s)) {
    return "YES";
  }
  if (s.length === 2) {
    return "NO";
  }
  for (let index = 1; index < s.length; index++) {
    const char = s[index];
    if (!isClosing(char)) {
      continue;
    } else if (isClosing(char) && s[index - 1] !== match(char)) {
      return "NO";
    } else {
      const testString = s.slice(0, index - 1) + s.slice(index + 1);
      return isBalanced(testString);
    }
  }
  return "NO";
}

console.log(isBalanced("{([("));
//console.log(isBalanced('('))
//console.log('========')
//console.log(isBalanced('([(])}'))
//console.log('========')
