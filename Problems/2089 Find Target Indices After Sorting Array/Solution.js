var targetIndices = function (a, t) {
    let r = [];
    a.sort((a, b) => a - b).map((n, i) => {
        if (n == t) {
            r.push(i);
        }
    });
    return r;
};