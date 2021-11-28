/**
 * param {number} x
 * return {boolean}
 */
var isPalindrome = function (x) {
    let isPositive = x > 0;
    let isNotZero = x !== 0;
    let canBeDivided = x % 10 !== 0;

    let canBePalindrome = isPositive && isNotZero && canBeDivided;
    if (canBePalindrome) {
        let reversedNum = 0;
        while (x > reversedNum) {
            reversedNum = reversedNum * 10 + x % 10;
            x = Math.round(x / 10);
        }

        return x === reversedNum || x === Math.round(reversedNum / 10);
    } else {
        return false;
    }
}

console.log(isPalindrome(1332331));
