// https://leetcode.com/problems/most-common-word/

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    let data = "";
    data = paragraph.toLowerCase();
    data = data.replaceAll(",", ", ");
    data = data.replaceAll(",", "");
    data = data.replaceAll("!", "");
    data = data.replaceAll("?", "");
    data = data.replaceAll("'", "");
    data = data.replaceAll(";", "");
    data = data.replaceAll(".", "");
    data = data.split(" ");
    let obj = {};
    data.forEach(el => {
        if (el != undefined && el != "" && el != " ") {
            data.forEach(e => {
                if (el == e || el == e + ",") {
                    if (obj[el] != undefined) {
                        obj[el] = obj[el] + 1;
                    } else {
                        obj[el] = 1;
                    }
                }
            });
        }
    });
    let word = {
        index: 0,
        value: 0
    };
    banned.map((e) => {
        if (obj[e] != undefined) {
            delete obj[e];
        }
        if (obj[""] != undefined) {
            delete obj[""];
        }
    });
    Object.values(obj).map((el, index) => {
        if (el > word.value) {
            word.index = index;
            word.value = el;
        }
    });
    return Object.keys(obj)[word.index];
};

/*
Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
Output: "ball"
Input: paragraph = "a.", banned = []
Output: "a"
"a, a, a, a, b,b,b,c, c"
["a"] 
// b

"Bob. hIt, baLl"
["bob", "hit"]
//ball
*/
let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
let banned = ["hit"]


// paragraph = "a.";
// banned = [];

// paragraph = "a, a, a, a, b,b,b,c, c";
// banned = ["a"];


paragraph = "Bob. hIt, baLl";
banned = ["bob", "hit"];

console.log(mostCommonWord(paragraph, banned))
