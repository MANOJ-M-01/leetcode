<?php
// https://leetcode.com/problems/running-sum-of-1d-array/

class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function runningSum($nums)
    {
        $val = 0;
        $res = [];
        for ($i = 0; $i < count($nums); $i++) {
            $val += (int)$nums[$i];
            array_push($res, $val);
        }
        return $res;
    }
}
/*
Input: nums = [1,2,3,4]
Output: [1,3,6,10]

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]

*/
$nums = [1, 2, 3, 4]; //true 

$obj = new Solution();
$res = $obj->runningSum($nums);
var_dump($res);
