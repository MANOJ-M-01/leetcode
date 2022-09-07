// https://leetcode.com/problems/contains-duplicate/

/*
Runtime: 105 ms, faster than 86.59% of TypeScript online submissions for Contains Duplicate.
Memory Usage: 51.4 MB, less than 44.93% of TypeScript online submissions for Contains Duplicate.
*/
function containsDuplicate(nums: number[]): boolean {
    return new Set(nums).size != nums.length;
};

console.log(containsDuplicate([1, 2, 3, 1])); //true
console.log(containsDuplicate([1, 2, 3, 4])); //false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); //true