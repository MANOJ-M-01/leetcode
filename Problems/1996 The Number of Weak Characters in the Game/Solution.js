/**
 * @param {number[][]} properties
 * @return {number}
 */

// Time complexity: O(n log n)
// Space complexity: O(1)

var numberOfWeakCharacters = function (properties) {
    properties.sort((a, b) => a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]);
    let count = 0, maxDefence = -Infinity;

    for (let i = properties.length - 1; i >= 0; i--) {
        if (properties[i][1] < maxDefence)
            count++;
        else
            maxDefence = properties[i][1];
    }

    return count;
};