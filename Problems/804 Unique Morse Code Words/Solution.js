// https://leetcode.com/problems/unique-morse-code-words/

// 10:30 AM
// 10:40 Am
// set faster than array

/**
 * @param {string[]} words
 * @return {number}
 */
//
/*
29%
*/
var uniqueMorseRepresentations1 = function (words) {
    let code = { a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.", s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--.." };
    let arr = [];
    for (let i = 0; i < words.length; i++) {
        if (words.length == 1 && words[i].length == 1) return 1;
        let morse = "";
        for (let j = 0; j < words[i].length; j++) {
            if (code[words[i][j]] != undefined) {
                morse += code[words[i][j]];
            }
        }
        if (!arr.includes(morse)) {
            arr.push(morse);
        }
    }
    return arr.length;
};


/*
Runtime: 79 ms, faster than 78.83% of JavaScript online submissions for Unique Morse Code Words.
Memory Usage: 42.7 MB, less than 86.68% of JavaScript online submissions for Unique Morse Code Words.
*/
var uniqueMorseRepresentations = function (words) {
    let code = { a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.", s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--.." };
    let set = new Set();
    for (let i = 0; i < words.length; i++) {
        if (words.length == 1 && words[i].length == 1) return 1;
        let morse = "";
        for (let j = 0; j < words[i].length; j++) {
            if (code[words[i][j]] != undefined) { // just in case (not required this checking)
                morse += code[words[i][j]];
            }
        }
        set.add(morse);
    }
    return set.size;
};


// optimized
// slower than ☝ previous solution

var uniqueMorseRepresentations = function (w) {
    let c = { a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.", s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--.." };
    let s = new Set();
    for (let i = 0; i < w.length; i++) {
        if (w.length == 1 && w[i].length == 1) return 1;
        let m = "";
        for (let j = 0; j < w[i].length; j++) {
            if (c[w[i][j]] != undefined) {
                m += c[w[i][j]];
            }
        }
        s.add(m);
    }
    return s.size;
};

let words = ["gin", "zen", "gig", "msg"];
words = ["a", "Sdsdss"];

console.log(uniqueMorseRepresentations(words));



// ANOTHER WAY
// 25-08-22

var generateKeys = function (codes) {
    let keys = {};
    let j = 0;
    for (i = 97; i <= 122; i++) {
        keys[String.fromCharCode(i)] = codes[j];
        j++;
    }
    return keys;
};

let morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

var uniqueMorseRepresentations = function (words) {
    // let code = { a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.", s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--.." };
    let code = generateKeys(morseCode);
    let set = new Set();
    for (let i = 0; i < words.length; i++) {
        if (words.length == 1 && words[i].length == 1) return 1;
        let morse = "";
        for (let j = 0; j < words[i].length; j++) {
            morse += code[words[i][j]];
        }
        set.add(morse);
    }
    return set.size;
};


console.log(uniqueMorseRepresentations("haihzj"));