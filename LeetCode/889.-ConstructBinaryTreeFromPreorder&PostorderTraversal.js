/*
Return any binary tree that matches the given preorder and postorder traversals.

Values in the traversals pre and post are distinct positive integers.

 
Example 1:

Input: pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
Output: [1,2,3,4,5,6,7]
 

Note:

1 <= pre.length == post.length <= 30
pre[] and post[] are both permutations of 1, 2, ..., pre.length.
It is guaranteed an answer exists. If there exists multiple answers, you can return any of them.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
  if (!pre || pre.length === 0) {
      return null;
  }
  
  let node = new TreeNode(pre[0]);
  
  if (pre.length > 1) {
      const LeftNode = pre[1];
  
      const LeftNodeInPost = post.indexOf(LeftNode);
  
      const LeftPostSlice = post.slice(0, LeftNodeInPost + 1);
      const RightPostSlice = post.slice(LeftNodeInPost + 1, post.length);
      const LeftPreSlice = pre.slice(1, LeftNodeInPost + 2);
      const RightPreSlice = pre.slice(LeftNodeInPost + 2, pre.length);
  
      node.left = constructFromPrePost(LeftPreSlice, LeftPostSlice);
      node.right = constructFromPrePost(RightPreSlice, RightPostSlice);
  }
  
  return node;
  
};