// https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/

var canBeIncreasing = function (nums) {
    let res = [];
    for (i = 0; i < nums.length; i++) {
        let arr = [...nums];
        arr.splice(i, 1);
        let start = arr[0];
        let isTrue = true;
        for (j = 0; j < arr.length - 1; j++) {
            if (start < arr[j + 1]) {
                start = arr[j + 1];
            } else {
                isTrue = false;
            }
        }
        if (isTrue) {
            res.push(true);
        } else {
            res.push(false);
        }
    }
    if (res.includes(true)) return true;
    return false;
};