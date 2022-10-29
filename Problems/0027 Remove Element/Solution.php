<?php
// https://leetcode.com/problems/remove-element/
// https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3248/
class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function removeElement(&$nums, $val)
    {
        $data = [];
        $blank = 0;
        for ($i = 0; $i < count($nums); $i++) {
            if ($nums[$i] == $val) {
                $blank += 1;
            } else {
                array_push($data, $nums[$i]);
            }
        }
        $res = count($data);
        for ($i = 0; $i < $blank; $i++) {
            array_push($data, "_");
        }
        $nums = $data;
        return $res;
    }
}

/*
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]

*/

// https://www.php.net/manual/en/language.references.php
$nums = [0, 1, 2, 2, 3, 0, 4, 2];
$val = 2;
$obj = new Solution();
$res = $obj->removeElement($nums, $val);
var_dump($res);
