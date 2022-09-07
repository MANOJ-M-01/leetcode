const DistnictArr = (arr1, arr2) => {
    let a1 = [...new Set(arr1)];
    let a2 = [...new Set(arr2)];
    let res = [];
    a1.forEach(el => {
        if (!a2.includes(el)) {
            res = [...res, el]
        }
    });
    return res;
}

var findDifference = function (n1, n2) {
    let a = DistnictArr(n1, n2);
    let b = DistnictArr(n2, n1);
    return [a, b];
};