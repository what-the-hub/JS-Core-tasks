/**
 * param {number} x
 * return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) return false;

    var reversedNum = 0;

    while (x > reversedNum) {
        reversedNum = reversedNum * 10 + x % 10;
        x = ~~(x / 10);
    }

    return x === reversedNum || x === ~~(reversedNum / 10);
};
console.log(isPalindrome(10101));