// https://leetcode.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var isPalindrome = function (head) {
    let curNode = head;
    let arr = [];
    while (curNode) {
        arr.push(curNode.val);
        curNode = curNode.next;
    }
    let j = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[j]) return false;
        j--;
    }
    return true;
};

/*
Input: head = [1,2,2,1]
Output: true

Input: head = [1,2]
Output: false

*/

node1 = new ListNode(1);
node2 = new ListNode(2);
node3 = new ListNode(2);
node4 = new ListNode(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(isPalindrome(node1));
