<?php
// https://leetcode.com/problems/reverse-prefix-of-word/
class Solution
{
    function reversePrefix($word, $ch)
    {
        $w = strpos($word, $ch);
        if (!$w) return $word;
        $p = strrev(substr($word, 0, $w + 1));
        $s = substr($word, $w + 1);
        return $p . $s;
    }
}
/*
Input: word = "abcdefd", ch = "d"
Output: "dcbaefd"
Input: word = "xyxzxe", ch = "z"
Output: "zxyxxe"
Input: word = "abcd", ch = "z"
Output: "abcd" 
*/

$word = "abcdefd";
$ch = "d";
$word = "xyxzxe";
$ch = "z";
$word = "abcd";
$ch = "z";
$obj = new Solution();
$res = $obj->reversePrefix($word, $ch);
var_dump($res);


/*
Runtime: 7 ms, faster than 83.33% of PHP online submissions for Reverse Prefix of Word.
Memory Usage: 19.1 MB, less than 83.33% of PHP online submissions for Reverse Prefix of Word.
*/