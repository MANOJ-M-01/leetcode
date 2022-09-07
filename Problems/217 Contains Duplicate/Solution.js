// https://leetcode.com/problems/contains-duplicate/
/*
Runtime: 106 ms, faster than 80.84% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 51 MB, less than 48.89% of JavaScript online submissions for Contains Duplicate.
*/
var containsDuplicate = function (nums) {
    return new Set(nums).size != nums.length;
};

console.log(containsDuplicate([1, 2, 3, 1])); //true
console.log(containsDuplicate([1, 2, 3, 4])); //false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); //true


// old

var containsDuplicate = function (nums) {
    let filterArray = [];
    let Exist = false;
    nums.forEach(el => {
        if (filterArray[el] != undefined) {
            Exist = true;
            return;
        } else {
            filterArray[el] = el
        }
    });
    return Exist;
};

/*
Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/
console.log(containsDuplicate([1, 2, 3, 4]))