/**
 * @param {number[][]} accounts
 * @return {number}
 */

const accountsArr = [[1, 2, 3], [3, 2, 1], [10, 11]]
const maximumWealth = function (accounts) {
    const getReduced = (item) => {
        return item.reduce((total, current) => total + current)
    }

    const maxSum = accounts.map((element) => {
        return getReduced(element)
    })

    return Math.max(...maxSum)
}

console.log(maximumWealth(accountsArr))