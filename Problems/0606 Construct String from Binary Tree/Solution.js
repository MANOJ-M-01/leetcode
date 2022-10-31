// https://leetcode.com/problems/construct-string-from-binary-tree/
// 09/07/2022 14:41
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var tree2str = function (root) {
    if (!root) return ''
    let left = tree2str(root.left)
    let right = tree2str(root.right)
    let s = ''
    if (!left && right) s = '()(' + right + ')'
    if (left && !right) s = '(' + left + ')'
    if (left && right) s = '(' + left + ')' + '(' + right + ')'
    return root.val + s
};

var tree2str = function (root) {
    let s = '';
    const dfs = function (node) {
        if (!node)
            return;
        s += node.val;
        if (!(node.left || node.right))
            return;
        s += '(';
        dfs(node.left)
        s += ')';
        if (node.right) {
            s += '(';
            dfs(node.right);
            s += ')';
        }
    };

    dfs(root);

    return s;
};