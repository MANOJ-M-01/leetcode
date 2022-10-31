var maximumScore = (nums, multipliers) => {
    const n = nums.length;
    const m = multipliers.length;
    const dp = Array(m + 1).fill(0);
    for (let op = m - 1; 0 <= op; --op) {
        const row = dp.slice();
        for (let left = op; left >= 0; --left) {
            const right = n - 1 - (op - left);
            const l = multipliers[op] * nums[left] + row[left + 1];
            const r = multipliers[op] * nums[right] + row[left];
            dp[left] = Math.max(l, r);
        }
    }
    return dp[0];
};