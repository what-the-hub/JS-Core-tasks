/**
 * @param {number[][]} accounts
 * @return {number}
 */

const accountsArr = [[1, 2, 3], [3, 2, 1], [10, 11]]
const maximumWealth = function (accounts) {
    let maxSumsArr = []

    const getReduced = (item) => {
        return item.reduce((total, current) => total + current)
    }

    accounts.forEach((element) => {
        maxSumsArr.push(getReduced(element))
    })

    return Math.max(...maxSumsArr)
}

console.log(maximumWealth(accountsArr))