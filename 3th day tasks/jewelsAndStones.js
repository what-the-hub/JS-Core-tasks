/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

const numJewelsInStones = function(jewels, stones) {
    const restStones = [...stones]
    const result = restStones.filter((stone) => jewels.includes(stone))
    
    return result.length
};

console.log(numJewelsInStones('sb', 'aAabbbbb'))