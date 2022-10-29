<?php
class Solution
{

    /**
     * @param Integer $x
     * @return Boolean
     */
    function isPalindrome($x)
    {
        if ($x == strrev($x)) {
            return true;
        }
        return false;
    }
}
