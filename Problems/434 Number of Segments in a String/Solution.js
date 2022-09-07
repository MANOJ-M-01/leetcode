var countSegments = function (s) {
    if (s.trim().length == 0 || s.length == 0) return 0;
    a = s.trim().split(" ");
    let arr = a.filter(function (item) {
        return item != '';
    })
    return arr.length;
}