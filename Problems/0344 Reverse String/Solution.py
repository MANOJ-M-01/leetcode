#  https://leetcode.com/problems/reverse-string/
class Solution:
    def reverseString(self, s: list[str]) -> None:
        arr = s.copy()
        j = len(arr)
        for i in range(0, len(arr), 1):
            j -= 1
            s[i] = arr[j]


s = ["h", "e", "l", "l", "o"]
obj = Solution()
obj.reverseString(s)

print(s)
