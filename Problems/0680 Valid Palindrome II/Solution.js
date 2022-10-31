var validPalindrome = (s) => {
    for (let i = 0, stop = s.length / 2; i < stop; i++) {
        let j = s.length - i - 1
        if (s[i] !== s[j]) {
            return isPalindrome(cut(s, i)) || isPalindrome(cut(s, j))
        }
    }
    return true
};

var cut = (s, i) => s.substr(0, i) + s.substr(i + 1);

var isPalindrome = (s) => s === s.split('').reverse().join('');