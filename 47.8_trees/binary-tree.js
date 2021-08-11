/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {

    //initialize a count 
    let depth = 0;
    //keep track of the queue
    let queue = [this.root];
    //check if tree is empty
    if (this.root === null) {
      return depth;
    }

    //loop while there is something in the queue
    while (queue.length) {
      //keep track of nodes;
      let numOfNodes = queue.length;
      while (numOfNodes > 0) {
        let current = queue.shift();
        //check if there are any children
        if (queue.left === null && queue.right === null) {
          depth++;
          return depth;
        }
        //if there is a left, push
        if (current.left) {
          queue.push(current.left)
        }
        //if there is a right, push
        if (current.left) {
          queue.push(current.left)
        }
        numOfNodes--;
      }
      depth++;
    }
    return depth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {

    //check to see if there is root
    if (this.root === null) return 0;

    //function takes in a node 
    function findDepth(node) {
      //if there are no children, return 1 for depth
      if (node.left === null && node.right=== null) {
        return 1;
      }
      //If no left, run findDepth on right(recurse) adding 1 to depth each time
      if (node.left === null) {
        return findDepth(node.right) + 1
      }
       //If no right, run findDepth on left(recurse) adding 1 to depth each time
      if (node.right === null) {
        return findDepth(node.left) + 1;
      }
      //return the value with the higher depth + 1 for root node
      return (findDepth(node.left) > findDepth(node.right) ? findDepth(node.left) : findDepth(node.right)) + 1
      //If no right, run findDepth on left
    }
    return findDepth(this.root)

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    //initalize a total;
    let total = 0;
    function sum(node) {
      //check if theres root
      if (node === null) {
        return 0;
      }
      //recurse the left and right as long as they are not leafs
      const leftSum = sum(node.left)
      const rightSum = sum(node.right)

      //total will be the max of either the total, or the val + left * right sum
      console.log('total',total, node.val + leftSum + rightSum)
      total = Math.max(total, node.val + leftSum + rightSum);

      return Math.max(0, leftSum + node.val, rightSum + node.val)
    }
    
    sum(this.root)
    return total;
  

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
      /**we want to go through every single node to check the val searching from top to bottom*/
      //check if there is anything in the root
      if (!this.root) return null;

      //check from top to bottom using a queue
      let queue = [this.root];
      let nextClosest = null;

      //loop while there is something in thre queue
      while (queue.length) {
        //check most recently added val;
        let current = queue.shift();
        let currentVal = current.val;

        let higherBoundary = currentVal > lowerBound;
        let reassignClosest = currentVal < nextClosest || nextClosest === null;

        //if current val is greater than lowerBound and currentVal is less than the nextCloses (or nextClosest is null), reassign the current val to be nextClosest
        if (higherBoundary && reassignClosest) {
          nextClosest = currentVal;
        }
        //if there is a child node, push the child node into the queue
        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)

      }

      return nextClosest;

  }
  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}


  let node6 = new BinaryTreeNode(1);
  let node5 = new BinaryTreeNode(1);
  let node4 = new BinaryTreeNode(2);
  let node3 = new BinaryTreeNode(3, node4, node6);
  let node2 = new BinaryTreeNode(5, node3, node5);
  let node1 = new BinaryTreeNode(5);
  let root = new BinaryTreeNode(6, node1, node2);
  largeTree = new BinaryTree(root);

module.exports = { BinaryTree, BinaryTreeNode };
