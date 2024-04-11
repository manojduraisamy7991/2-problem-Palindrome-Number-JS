/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x === +x.toString().split('').reverse().join("")
};

const result = isPalindrome(121)
console.log(result)
