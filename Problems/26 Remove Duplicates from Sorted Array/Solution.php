<?php
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3247/
class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function removeDuplicates(&$nums)
    {
        $data = [];
        $blank = 0;
        for ($i = 0; $i < count($nums); $i++) {
            $exist = false;
            for ($j = 0; $j < count($data); $j++) {
                if ($data[$j] == $nums[$i]) {
                    $exist = true;
                }
            }
            if (!$exist) {
                array_push($data, $nums[$i]);
            } else {
                $blank += 1;
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
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

*/

// https://www.php.net/manual/en/language.references.php
$nums = [1, 1, 2]; //false

$obj = new Solution();
$res = $obj->removeDuplicates($nums);
var_dump($res);
