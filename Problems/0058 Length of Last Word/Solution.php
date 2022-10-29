<?php
// https://leetcode.com/problems/length-of-last-word/
class Solution
{

    /**
     * @param String $s
     * @return Integer
     */
    function lengthOfLastWord($s)
    {
        $str = explode(" ", $s);
        $len = strlen($str[count($str) - 1]);
        $i = 1;
        while ($len == 0) {
            $len = strlen($str[count($str) - $i]);
            $i++;
        }
        return $len;
    }
}
