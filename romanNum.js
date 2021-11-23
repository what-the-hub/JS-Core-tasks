function romanToInt(s) {
    const HASHMAP = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);

    return s.split('').reduce((accumulator, currentValue, index, arr) => {
        const current = HASHMAP.get(currentValue);
        const next = HASHMAP.get(arr[index + 1]);
        if (current < next) {
            return accumulator - current;
        }
        return accumulator + current;
    }, 0);
};

console.log(romanToInt('XL'));