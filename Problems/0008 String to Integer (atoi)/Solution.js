var myAtoi = function (str) {
    const MIN_VALUE = Math.pow(-2, 31);
    const MAX_VALUE = Math.pow(2, 31) - 1;
    const result = Number(str.trimLeft().match(/^[-\+]?\d+/));
    if (result < MIN_VALUE) return MIN_VALUE;
    if (result > MAX_VALUE) return MAX_VALUE;
    return result;
};