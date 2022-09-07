// https://leetcode.com/problems/reduce-array-size-to-the-half/

//10:40 AM
// 11:00 //then break
/**
 * @param {number[]} arr
 * @return {number}
 */
// https://www.youtube.com/watch?v=L1KMXjrWGIE
// https://www.youtube.com/watch?v=m9mHzIJ6Zr4

var minSetSize = function (arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] != undefined) {
            obj[arr[i]] += 1;
        } else {
            obj[arr[i]] = 1;
        }
    }
    let val = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
    let len = arr.length;
    let curlen = len;
    let count = 0;
    for (let i = 0; i < val.length; i++) {
        curlen -= obj[val[i]];
        count++;
        if (curlen <= len / 2) {
            return count;
        }
    }
    return count;
};


let arr = [3, 3, 3, 3, 5, 5, 5, 2, 2, 7] //2
// arr=[7,7,7,7,7,7] //1
// arr=[1,9]//1
// arr=[1000,1000,3,7] //1
// arr=[1,2,3,4,5,6,7,8,9,10];  //5


console.log(minSetSize(arr));