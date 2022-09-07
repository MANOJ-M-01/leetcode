<?php
// https://leetcode.com/problems/capitalize-the-title/
class Solution
{

    /**
     * @param String $title
     * @return String
     */
    function capitalizeTitle($title)
    {
        $str = explode(" ", $title);
        $var = "";
        foreach ($str as $s) {
            if (strlen($s) > 2) {
                $var = $var . " " . ucwords(strtolower($s));
            } else {
                $var = $var . " " . strtolower($s);
            }
        }
        return substr($var, 1, strlen($var) - 1);
    }
}

$obj = new Solution();
$title = "First leTTeR of EACH Word";
$res = $obj->capitalizeTitle($title);

var_dump($res);
