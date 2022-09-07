# https://leetcode.com/problems/counting-words-with-a-given-prefix/

# my
class Solution:
    def prefixCount(self, words: list[str], pref: str) -> int:
        c = 0
        for i in range(len(words)):
            if (len(words[i]) >= len(pref)):
                if (words[i][:len(pref)] == pref):
                    c += 1
        return c
# https://leetcode.com/problems/counting-words-with-a-given-prefix/discuss/2335251/Python3-Easy-One-Liner


class Solution:
    def prefixCount(self, words: List[str], pref: str) -> int:
        return sum([word.startswith(pref) for word in words])

# my optimized


class Solution:
    def prefixCount(self, w: List[str], p: str) -> int:
        return sum([i.startswith(p) for i in w])


words = ["pay", "attention", "practice", "attend"]
pref = "at"  # 2

words = ["leetcode", "win", "loops", "success"]
pref = "code"  # 0

words = ["sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh",
         "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "vbx", "fsi", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "gqira", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh", "sxyjellhlh"]
pref = "sxyjellhlh"  # 92

obj = Solution()
print(obj.prefixCount(words, pref))
