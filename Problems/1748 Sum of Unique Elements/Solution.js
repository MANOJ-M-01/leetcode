// https://leetcode.com/problems/sum-of-unique-elements

var sumOfUnique = function (nums) {
    let no = 0;
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                count += 1;
            }
        }
        if (count == 1) {
            no += nums[i];
        }
    }
    return no;
};