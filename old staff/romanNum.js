var romanToInt = function (s) {
    var dictionary = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let result = 0;

    for (var i = 0; i < s.length; i++) {
        const current = dictionary[s[i]];
        const next = dictionary[s[i + 1]];

        if (current < next) {
            result += next - current;
            i += 1;
        } else {
            result += current;
        }
    }

    return result;
};

console.log(romanToInt('XV'));