/**
 * param {number} x
 * return {boolean}
 */
var isPalindrome = function (x) {
    let reversedNumber = 0;
    for (let temp = x; temp > 0; temp = Math.floor(temp / 10)) {
        let remainder = temp % 10;
        reversedNumber = reversedNumber * 10 + remainder;
    }

    return reversedNumber === x;
};
console.log(isPalindrome(32));