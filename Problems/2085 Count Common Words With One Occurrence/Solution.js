var countWords = function (words1, words2) {
    let a = words1.length >= words2.length ? words1 : words2;
    let b = words1.length >= words2.length ? words2 : words1;
    let count = 0;
    for (let i = 0; i < b.length; i++) {
        let isTwice = 0;
        for (let j = 0; j < b.length; j++) {
            if (b[j] == b[i]) {
                isTwice += 1;
            }
        }
        if (isTwice == 1 && a.includes(b[i])) {
            let isOnce = 0;
            for (let j = 0; j < a.length; j++) {
                if (a[j] == b[i]) {
                    isOnce += 1;
                }
            }
            if (isOnce == 1) {
                count += 1;
            }
        }
    }
    return count;
};