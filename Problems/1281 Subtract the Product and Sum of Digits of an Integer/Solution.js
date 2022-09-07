// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/submissions/

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let nu = n.toString()
    let a = 1;
    let b = 0;
    for (i = 0; i < nu.length; i++) {
        a *= parseInt(nu[i]);
    }
    for (i = 0; i < nu.length; i++) {
        b += parseInt(nu[i]);
    }
    return a - b;
};

let n = 234;
n = 4421
console.log(subtractProductAndSum(n));