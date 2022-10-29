<?php
// https://leetcode.com/problems/detect-capital/
class Solution
{

    /**
     * @param String $word
     * @return Boolean
     */
    function detectCapitalUse($word)
    {
        if (strtoupper($word) == $word) {
            return true;
        }
        if (strtolower($word) == $word) {
            return true;
        }
        if (
            strtolower(substr($word, 0, 1)) == substr($word, 0, 1) ||
            substr($word, 1, strlen($word) - 1) != strtolower(substr($word, 1, strlen($word) - 1))
        ) {
            return false;
        }
        if (ucwords(substr($word, 0, 1)) == substr($word, 0, 1)) {
            return true;
        }
        return false;
    }
}

$obj = new Solution();
$s = "leTTeR";
$s = "USA";
$s = "FlaG";
$res = $obj->detectCapitalUse($s);

var_dump($res);
