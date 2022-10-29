// https://leetcode.com/problems/buddy-strings/

var buddyStrings = function (A, B) {
    if (A.length != B.length) return false;

    if (A == B) {
        let s = new Set(A);
        return s.size < A.length;
    }

    let hash = {};
    let res = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            res++;
            if (res > 2) return false;
            if (res == 2) {
                if (A[hash[A[i]]] !== B[i] && B[hash[B[i]]] !== A[i]) {
                    return false;
                }
            }
            hash[A[i]] = i;
            hash[B[i]] = i;
        }
    }
    return res == 2;
};