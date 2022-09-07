<?php
// https://leetcode.com/problems/search-insert-position/submissions/

class Solution
{

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer
     */
    function searchInsert($nums, $target)
    {
        $cnt = count($nums);

        for ($j = 0; $j < $cnt; $j++) {
            $cnts = $cnt - 1;
            if ($nums[$j] >= $target) return $j;
            elseif ($cnts == $j)
                if (end($nums) < $target) return ++$j;
        }
    }
}
