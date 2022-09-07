var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false
    }
    let c = 0;
    let d = t;
    for (i = 0; i < s.length; i++) {
        if (d.includes(s[i])) {
            c += 1
        } else {
            return false
        }
        d = d.replace(s[i], '');
    }
    if (c == t.length) {
        return true
    }
    return false
}