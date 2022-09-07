// https://leetcode.com/problems/first-letter-to-appear-twice/
/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
    let filterArray = [];
    let arr = s.split('')
    for (let i = 0; i < s.length; i++) {
        if (filterArray[arr[i]] != undefined) {
            filterArray = null
            return arr[i];
        } else {
            filterArray[arr[i]] = arr[i]
        }
    };
    arr = null
    filterArray = null
    return "";
};

s = "abccbaacz"
// s = "abcdd";
console.log(repeatedCharacter(s));