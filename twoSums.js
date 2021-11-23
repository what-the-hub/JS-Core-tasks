/**
 * param {number[]} nums
 * param {number} target
 * return {number[]}
 */
let twoSum = function (nums, target) {
    let hashmap = new Map();
    nums.forEach(function (value, index) {
        hashmap.set(value, index);
    })
    
    for (let i in nums) {
        if (hashmap.has(target - nums[i]) && i != hashmap.get(target - nums[i])) {
            return [i * 1, hashmap.get(target - nums[i])];
        }
    }
};


console.log(twoSum([2, 1, 3, 4, 1], 7));