// https://leetcode.com/problems/rings-and-rods/

/**
 * @param {string} rings
 * @return {number}
 */
// All answer working

/*
Runtime: 81 ms, faster than 71.20% of JavaScript online submissions for Rings and Rods.
Memory Usage: 43.3 MB, less than 19.02% of JavaScript online submissions for Rings and Rods.
*/

var countPoints = function (rings) {
    let a = rings.split(``);
    let obj = {};
    for (let i = 0; i < a.length; i = i + 2) {
        if (a[i + 1] in obj) {
            obj[a[i + 1]] = [...obj[a[i + 1]], a[i]];
        } else {
            obj[a[i + 1]] = [a[i]];
        }
    }
    let val = Object.values(obj);
    let count = 0;
    for (let i = 0; i < val.length; i++) {
        let set = new Set();
        for (let j = 0; j < val[i].length; j++) {
            set.add(val[i][j]);
        }
        if (set.size >= 3) {
            count += 1;
        }
    }
    return count;
};

var countPoints = function (rings) {
    let a = rings.split(``);
    let obj = {};
    for (let i = 0; i < a.length; i = i + 2) {
        if (a[i + 1] in obj) {
            obj[a[i + 1]] = [...obj[a[i + 1]], a[i]];
        } else {
            obj[a[i + 1]] = [a[i]];
        }
    }
    let val = Object.values(obj);
    let count = 0;
    for (let i = 0; i < val.length; i++) {
        if (val[i].includes('R') && val[i].includes('G') && val[i].includes('B')) {
            count += 1;
        }
    }
    return count;
};


/*
Runtime: 81 ms, faster than 71.20% of JavaScript online submissions for Rings and Rods.
Memory Usage: 42.9 MB, less than 20.65% of JavaScript online submissions for Rings and Rods./
*/

var countPoints = function (r) {
    let a = r.split(``);
    let o = {};
    for (let i = 0; i < a.length; i = i + 2) {
        if (a[i + 1] in o) {
            o[a[i + 1]] = [...o[a[i + 1]], a[i]];
        } else {
            o[a[i + 1]] = [a[i]];
        }
    }
    let v = Object.values(o);
    let c = 0;
    for (let i = 0; i < v.length; i++) {
        if (v[i].includes('R') && v[i].includes('G') && v[i].includes('B')) {
            c += 1;
        }
    }
    return c;
};

let rings = "B0B6G0R6R0R6G9";
// rings = "G4";
console.log(countPoints(rings));