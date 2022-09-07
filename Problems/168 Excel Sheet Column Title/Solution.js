var convertToTitle = function (colN) {
    let res = "";
    while (colN > 0) {
        let n = (--colN) % 26;
        colN = Math.floor(colN / 26);
        res += String.fromCharCode(65 + n);

    }
    res = res.split("").reverse().join("")
    return res
};