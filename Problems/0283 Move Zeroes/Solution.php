<?php
// https://leetcode.com/problems/move-zeroes/
class Solution
{

    /**
     * @param Integer[] $nums
     * @return NULL
     */
    function moveZeroes(&$nums)
    {
        // sort($nums, SORT_NUMERIC);
        $data = [];
        $blank = 0;
        for ($i = 0; $i < count($nums); $i++) {
            if ($nums[$i] == 0) {
                $blank += 1;
            } else {
                array_push($data, $nums[$i]);
            }
        }
        $res = count($data);
        for ($i = 0; $i < $blank; $i++) {
            array_push($data, 0);
        }
        $nums = $data;
        return $res;
    }
}

/*
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Input: nums = [0]
Output: [0]

*/

// https://www.php.net/manual/en/language.references.php
$nums = [0, 1, 0, 3, 12];
$obj = new Solution();
$res = $obj->moveZeroes($nums);
var_dump($res);
