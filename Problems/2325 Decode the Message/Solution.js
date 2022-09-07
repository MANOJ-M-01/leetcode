// https://leetcode.com/problems/decode-the-message

const decodeMessage = (key, message) => {
    const table = [...key].reduce((a, c) => (a.includes(c) || c === " " ? a : [...a, c]), []);
    return [...message].reduce(
        (a, c) =>
            c === " "
                ? (a += " ")
                : (a += String.fromCharCode(table.findIndex((x) => x === c) + 97)),
        ""
    );
};