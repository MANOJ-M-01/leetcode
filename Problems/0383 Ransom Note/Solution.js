// https://leetcode.com/problems/ransom-note/
//can be improved
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
*/

// brute force
/*
Runtime: 147 ms, faster than 35.32% of JavaScript online submissions for Ransom Note.
Memory Usage: 45.4 MB, less than 49.45% of JavaScript online submissions for Ransom Note.
*/

var canConstruct = function (ransomNote, magazine) {
    let noteObj = {};
    for (let i = 0; i < ransomNote.length; i++) {
        if (noteObj[ransomNote[i]] != undefined) {
            noteObj[ransomNote[i]] = noteObj[ransomNote[i]] + 1;
        } else {
            noteObj[ransomNote[i]] = 1;
        }
    }
    let magazineObj = {};
    for (let i = 0; i < magazine.length; i++) {
        if (magazineObj[magazine[i]] != undefined) {
            magazineObj[magazine[i]] = magazineObj[magazine[i]] + 1;
        } else {
            magazineObj[magazine[i]] = 1;
        }
    }
    let arr = Object.entries(noteObj);
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i][0];
        let value = arr[i][1];
        if (magazineObj[key] == undefined) {
            return false;
        }
        if (magazineObj[key] < value) {
            return false;
        }
    }
    return true;
};


console.log(canConstruct("a", "b")) //false
console.log(canConstruct("aa", "ab")) //false
console.log(canConstruct("aa", "aab")) //true

console.log(canConstruct("john", "mark")) //false
console.log(canConstruct("john", "hnoj")) //false
console.log(canConstruct("john", "hmarknsameoj")) //true