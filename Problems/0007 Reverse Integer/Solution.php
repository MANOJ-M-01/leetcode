<?php
// https://leetcode.com/problems/reverse-integer/

class Solution
{

    /**
     * @param Integer $x
     * @return Integer
     */
    function reverse($x)
    {
        $str = (string)$x;
        $str = str_split($str);
        $res = '';
        for ($i = count($str) - 1; $i > -1; $i--) {
            if ($str[$i] != "-") {
                $res .= $str[$i];
            }
        }
        while ($res[0] == "0") {
            $res = substr($res, 1, strlen($res));
        }
        if (!$this->is_32bit_signed_int($res)) {
            return 0;
        }
        if ($str[0] == "-") {
            return  (int)-$res;
        }
        return (int)$res;
    }
    function is_32bit_signed_int($value)
    {
        $options = ['min_range' => -2147483647, 'max_range' => 2147483647];
        return false !== filter_var($value, FILTER_VALIDATE_INT, compact('options'));
    }
}

$x = 123; //321
// $x = -123; //-321
$x = 120; //21;
// $x=1534236469; //0
// $x=-10;

$obj = new Solution();
$res = $obj->reverse($x);
var_dump($res);
