// https://leetcode.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
var isPalindrome = function (s) {
    if (!s) return true
    const replaced = s.replace(/[^a-z0-9]/gi, '');
    if (replaced.toLowerCase() == reverseString(replaced.toLowerCase())) {
        return true
    }
    return false
};


/*
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/
let s = "A man, a plan, a canal: Panama"
s = "race a car"
s = " "
console.log(isPalindrome(s));