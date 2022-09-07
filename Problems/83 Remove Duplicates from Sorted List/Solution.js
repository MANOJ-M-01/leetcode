// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// https://leetcode.com/problems/remove-duplicates-from-sorted-list/discuss/2442595/JavaScript-Fast-and-simple-O(n)-time-O(1)-space-solution
var deleteDuplicates2 = function (head) {
    if (!head) {
        return null;
    }
    let cur = head;
    while (cur?.next) {
        let nextNode = cur.next;
        while (nextNode && nextNode.val === cur.val) {
            nextNode = nextNode.next;
        }
        cur.next = nextNode;
        cur = nextNode;
    }
    return head;
};

// https://leetcode.com/problems/remove-duplicates-from-sorted-list/discuss/28722/Javascript-Solution
var deleteDuplicates = function (head) {
    var cur = head;
    while (cur) {
        if (cur.next !== null && cur.val == cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};

// [1,1,2,3,3] // [1,2,3]
let node1 = new ListNode(1);
let node2 = new ListNode(1);
let node3 = new ListNode(2);
let node4 = new ListNode(3);
let node5 = new ListNode(3);

node1.next = node2;
node2.next = node3
node3.next = node4;
node4.next = node5;
// console.log(node1);

console.log(deleteDuplicates(node1));