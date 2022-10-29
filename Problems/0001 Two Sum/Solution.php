<?php
// https://leetcode.com/problems/two-sum/

class Solution
{

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum3($nums, $target)
    {
        for ($i = 0; $i < count($nums); $i++) {
            for ($j = $i + 1; $j < count($nums); $j++) {
                if ($nums[$i] + $nums[$j] == $target) {
                    return [$i, $j];
                }
            }
        }
    }
    function twoSum($nums, $target)
    {
        $len = count($nums);
        $map = [];
        for ($i = 0; $i < $len; $i++) {
            $num = $nums[$i];
            $solution = $target - $num;
            if (isset($map[$solution]) && $map[$solution]['index'] != $i) {
                return [$map[$solution]['index'], $i];
            }
            $map[$num] = [
                'index' => $i,
                'solution' => $solution
            ];
        }
    }
}

$nums = [2, 7, 11, 15];
$target = 9;
// [0,1]

$obj = new Solution();
$res = $obj->twoSum($nums, $target);
print_r($res);
