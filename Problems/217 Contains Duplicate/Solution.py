# https://leetcode.com/problems/contains-duplicate/
"""
Runtime: 488 ms, faster than 87.98% of Python3 online submissions for Contains Duplicate.
Memory Usage: 26.1 MB, less than 28.80% of Python3 online submissions for Contains Duplicate.
Next challenges:
"""


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        return len(set(nums)) != len(nums)
