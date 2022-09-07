// https://leetcode.com/problems/strong-password-checker/
/**
 * @param {string} password
 * @return {boolean}
 */

var strongPasswordChecker = function (password) {
    let steps = 0;
    let mustAdd = 0;

    if (!password.match(/[A-Z]/)) {
        mustAdd++;
    }
    if (!password.match(/[a-z]/)) {
        mustAdd++;
    }
    if (!password.match(/\d/)) {
        mustAdd++;
    }

    let groups = password.match(/(.)\1*/g).filter(x => x.length > 2);

    if (password.length <= 20) {
        groups.forEach(group => {
            steps += Math.trunc(group.length / 3);
            mustAdd -= Math.trunc(group.length / 3);
        })
    }

    if (password.length <= 20) {
        mustAdd = mustAdd > 0 ? mustAdd : 0;
        if (password.length + steps >= 6) {
            steps += mustAdd;
        } else {
            if (mustAdd > 6 - (password.length + steps)) {
                steps += mustAdd;
            } else {
                steps += 6 - (password.length + steps);
            }
        }
    }

    if (password.length > 20) {
        let mustRemove = password.length - 20;
        let lengths = [];
        let plus = [];
        let chL = 0;
        for (let i = 1; i <= 3; i++) {
            for (let k = 0; k < groups.length; k++) {
                if (plus[k] === undefined) { plus[k] = 0; }
                chL = groups[k].length - plus[k];
                if (lengths[k] === undefined) { lengths[k] = chL; }
                const rec = () => {
                    if (Math.trunc((chL - i) / 3) < Math.trunc(chL / 3) && password.length - steps - i >= 6 && mustRemove >= i && chL > 2 && lengths[k] - i > 0) {
                        steps += i;
                        plus[k] += i;
                        mustRemove -= i;
                        chL -= i;
                        lengths[k] -= i;
                        rec();
                    }
                }
                rec();
            }
        }
        lengths.forEach(length => {
            if (length > 2) {
                steps += Math.trunc(length / 3);
                mustAdd -= Math.trunc(length / 3);
            }
        }
        )

        mustRemove = mustRemove > 0 ? mustRemove : 0;
        mustAdd = mustAdd > 0 ? mustAdd : 0;
        steps += mustAdd + mustRemove;
    }

    return steps;
}
