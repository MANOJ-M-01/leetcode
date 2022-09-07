/*
Runtime: 80 ms, faster than 69.16% of JavaScript online submissions for Check if Numbers Are Ascending in a Sentence.
Memory Usage: 42 MB, less than 63.88% of JavaScript online submissions for Check if Numbers Are Ascending in a Sentence./
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
    let arr = s.split(' ');
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            a.push(parseInt(arr[i]));
        }
    }
    let b = a.slice().sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (a[i] != b[i] || (a[i - 1] != undefined && a[i - 1] == a[i])) return false;
    }
    return true;
};

let s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles";
// s = "hello world 5 x 5";
// s = "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s";
// s="1 box has 3 blue 4 red 6 green and 12 yellow marbles";
console.log(areNumbersAscending(s));


// from peer
// https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/discuss/2321928/Javascript-simple-solution-with-98-faster

const areNumbersAscending = (s) => {
    const sArr = s.split(" ");
    let temp = 0;
    for (let i = 0; i < sArr.length; i++) {
        const element = +sArr[i];
        if (isNaN(element)) continue;
        if (element > temp) temp = element;
        else return false;
    }
    return true;
};