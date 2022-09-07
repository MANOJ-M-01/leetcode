# https://leetcode.com/problems/median-of-two-sorted-arrays/

"""
Runtime: 102 ms, faster than 88.99% of Python3 online submissions for Median of Two Sorted Arrays.
Memory Usage: 14.2 MB, less than 67.77% of Python3 online submissions for Median of Two Sorted Arrays.
"""


class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        nums1 = nums1+nums2
        nums1.sort()
        if len(nums1) % 2 == 0:
            return (nums1[int((len(nums1) / 2)) - 1] + nums1[int(len(nums1) / 2)]) / 2
        return nums1[int((len(nums1)-1) / 2)]


obj = Solution()
print(obj.findMedianSortedArrays([1, 3], [2]))
print(obj.findMedianSortedArrays([1, 2], [3, 4]))
