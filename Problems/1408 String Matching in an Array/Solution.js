//https://leetcode.com/problems/string-matching-in-an-array/
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    let arr = [];
    words.forEach(searchword => {
        words.forEach(word => {
            if (searchword != word) {
                if (searchword.search(word) >= 0) {
                    if (!arr.includes(word)) {
                        arr = [...arr, word]
                    }
                }
            }
        })
    })
    return arr;
};

/*
Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"] 
Input
["leetcoder","leetcode","od","hamlet","am"]
Output
["leetcode","od","od","am"]
Expected
["leetcode","od","am"]

*/
let words = ["mass", "as", "hero", "superhero"];
words = ["leetcoder", "leetcode", "od", "hamlet", "am"];
console.log(stringMatching(words))