function isPalindrome(str) {
  const halfIndex = chars.length / 2
  const firstHalf = str.slice(0, Math.floor(halfIndex)).join('')
  const secondHalf = str.split('').slice(Math.ceil(halfIndex)).reverse().join('')
  return firstHalf === secondHalf
}

function indexToRemove(s) {
    if (isPalindrome(s)) {
        return -1
    }
    let indexRemove = -1
    for (let index = 0; index < Math.floor(s.length / 2); index++) {
        let firstCharToCompare = s[index]
        let secondCharToCompare = s[s.length - index - 1]
        if (firstCharToCompare !== secondCharToCompare) {
            // check if the word becomes a palindrome upon removal of firstCharToCompare
            // if not, check if the word becomes a palindrome upon removal of secondCharToCompare
            // otherwise, the value of indexRemove should remain -1
            if (isPalindrome(s.slice[index + 1, s.length - index])) {
                indexRemove = index
            } else if (isPalindrome(s.slice[index, s.length - index - 1])) {
                indexRemove = s.length - index - 1
            }
        }
    }
}

console.log(indexToRemove('vatav')) // should return -1
console.log(indexToRemove('cvatav')) // should return 0
console.log(indexToRemove('bhcb')) // should return 1