<?php
// https://leetcode.com/problems/to-lower-case/
class Solution
{

    /**
     * @param String $s
     * @return String
     */
    function toLowerCase($s)
    {
        return strtolower($s);
    }
}

$obj = new Solution();
$s = "leTTeR";
$res = $obj->toLowerCase($s);

var_dump($res);
