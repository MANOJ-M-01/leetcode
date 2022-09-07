/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinctss = function (arr, k) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count += 1;
            }
            if (count == 2) {
                break;
            }
        }
        if (count == 1) {
            a.push(arr[i]);
        }
    }
    return a[k - 1] != undefined ? a[k - 1] : "";
};


/*
Runtime: 98 ms, faster than 74.42% of JavaScript online submissions for Kth Distinct String in an Array.
Memory Usage: 44 MB, less than 92.25% of JavaScript online submissions for Kth Distinct String in an Array.
*/
// optimized
var kthDistinct = function (a, k) {
    let r = [];
    for (let i = 0; i < a.length; i++) {
        let c = 0;
        for (let j = 0; j < a.length; j++) {
            if (a[i] == a[j]) {
                c += 1;
            }
            if (c == 2) {  // this break will help the time complexity  118ms 51.16% to 98 ms 74.42% 
                break;
            }
        }
        if (c == 1) {
            r.push(a[i]);
        }
    }
    return r[k - 1] != undefined ? r[k - 1] : "";
};

let arr = ["d", "b", "c", "b", "c", "a"];
let k = 2;
arr = ["aaa", "aa", "a"], k = 1
arr = ["a", "b", "a"], k = 3
console.log(kthDistinct(arr, k));


