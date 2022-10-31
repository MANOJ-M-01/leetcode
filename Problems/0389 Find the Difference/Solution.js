/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */


 var findTheDifference = function (s, t) {
    let arr1 = [...s];
    arr1.sort();
    let arr2 = [...t];
    arr2.sort();
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] !== arr1[i]) return arr2[i];
    }
    return "";
};



var findTheDifference = function (s, t) {
    let sum = 0;
    for (var i = 0; i < s.length; i++) { //let will cause an error in t[i]
        sum ^= t[i].charCodeAt() ^ s[i].charCodeAt();
    }
    sum ^= t[i].charCodeAt();
    return String.fromCharCode(sum);
};



var findTheDifference = function (s, t) {
    if (s.length == 0) return t;
    let hashMap1 = {}
    let hashMap2 = {}
    for (let i = 0; i < s.length; i++) {
        if (hashMap1[s[i]] != undefined) {
            hashMap1[s[i]] = hashMap1[s[i]] + 1;
        } else {
            hashMap1[s[i]] = 1;
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (hashMap2[t[i]] != undefined) {
            hashMap2[t[i]] = hashMap2[t[i]] + 1;
        } else {
            hashMap2[t[i]] = 1;
        }
    }
    let sd = "";
    Object.entries(hashMap2).map(el => {
        if (hashMap1[el[0]] != el[1]) {
            sd = el[0];
        }
        if (hashMap1[el[0]] == undefined) {
            sd = el[0];
        }
    })
    return sd;
};


console.log(findTheDifference(s = "abcd", t = "abcde")) // e
console.log(findTheDifference(s = "", t = "y")) // y
console.log(findTheDifference(s = "a", t = "aa")) // a