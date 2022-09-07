// https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/


var divideString = function (s, k, fill) {
    let len = Math.ceil((s.length) / k);
    let res = [];
    for (i = 0; i < len; i++) {
        let word = s.slice(i * k, i * k + k);
        res.push(word);
    }
    if (res[res.length - 1].length != k) {
        let a = k - (res[res.length - 1].length);
        let b = fill.repeat(a);
        res[res.length - 1] = res[res.length - 1] + b;
    }
    return res;
};