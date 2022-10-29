// https://leetcode.com/problems/rotate-string/

var rotateString = function (s, g) {
   for (let i = 0; i < s.length; i++) {
      s = s.substring(1) + s[0];
      if (s === g) return true;
   }
   return false;
};