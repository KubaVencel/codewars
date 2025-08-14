/*

From Traversals to Tree

Description:
Finding a Binary Tree from Traversals

Reconstruct a binary tree from its in-order and post-order traversals. A binary tree is a tree where each node has either 0, 1 or 2 children. Such a tree is usually represented recursively using a class where each node has a value and left and right subtrees (either of which can be None or a similar empty value).

class TreeNode {
  constructor(value,left=null,right=null) {
	this.value = value;
	this.left = left;
	this.right = right;
  }
}

For example,

new TreeNode(1, new TreeNode(2, new TreeNode(4), null), new TreeNode(3, new TreeNode(5, null, null), new TreeNode(6, null, null)))

represents the tree below.

Trailing nulls can be omitted, as in new TreeNode(4).

		  1
		 / \
		2   3
	   /   / \
	  4   5   6

Traversals

A tree can be traversed in various ways. The in-order traversal visits the left child of each node, then the node itself, then its right child. For example, the in-order traversal of the tree above is 4 2 1 5 3 6.

Different trees can have the same in-order traversal. For example, the in-order traversal of the tree below is also 4 2 1 5 3 6.

		  3
		 / \
		1   6
	   / \  
	  2   5  
	 /
	4

The post-order traversal visits the left child first, then the right child, then the node itself. For example, the post-order traversal of the first tree is 4 2 5 6 3 1, while the post-order traversal of the second tree is 4 2 5 1 6 3. Different trees can have the same post-order traversal.

Although neither the in-order traversal nor the post-order traversal identify the tree, the combination of the two does.
Task

Reconstruct a tree from its in-order and post-order traversals.

Input: Two lists of integers, the first containing the in-order traversal and the second the post-order traversal of a particular tree. Each list will have no duplicate values, so each node is identifiable.

Output: Return the tree whose in-order and post-order traversals match the given values. Subtrees that are null can be omitted or included.
Examples

buildTree([4, 2, 1, 5, 3, 6], [4, 2, 5, 6, 3, 1])
// should return new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3, new TreeNode(5), new TreeNode(6))) or an equivalent representation of the first tree above.

buildTree([4, 2, 1, 5, 3, 6], [4, 2, 5, 1, 6, 3])
// should return new TreeNode(3, new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(5)), new TreeNode(6)), the second tree above.

Random Tests

There are 2 types of random tests:

	100 random trees containing from 0 to 15 nodes.
	Five random trees of 150,000 nodes.

Other Thoughts

There is also a pre-order traversal: Visit the node before visiting its left child and then its right child. To reconstruct a tree from its in-order and pre-order traversals, see Tree Reconstruction. Can a tree be reconstructed from its pre-order and post-order traversals?

Other kata related to binary tree traversals include Perfect Binary Tree Traversal: BFS to DFS, Binary Tree Traversal, and Binary Tree Serpentine Traversal.

*/

/* Preloaded:

class TreeNode {
  constructor(value,left=null,right=null) {
	this.value = value;
	this.left = left;
	this.right = right;
  }
}

*/

function buildTree(inOrder, postOrder) {
	function reconstruct(inOrder) {
		// Edge/Base case when the array is empty;
		if (inOrder.length === 0) return null;

		let rootValue = postOrder.pop();  // NOTE: This mutates the `postOrder` array.
		let rootIndex = inOrder.indexOf(rootValue);
		let leftItems = inOrder.slice(0, rootIndex);
		let rightItems = inOrder.slice(rootIndex + 1);

		// NOTE: Order matters, as the calls mutate the `postOrder` array. We HAVE TO process the right side first.
		let rightSubTree = reconstruct(rightItems);
		let leftSubTree = reconstruct(leftItems);

		return new TreeNode(rootValue, leftSubTree, rightSubTree);
	}

	return reconstruct(inOrder);
}
