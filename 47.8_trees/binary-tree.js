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
      return 0;
    }
    //loop as long as there is a something in length
    while (queue.length) {
      //keep track of how many nodes there are in a level
      let numNodes = queue.length;
      //while there are nodes, loop
      while (numNodes > 0) {

        //grabs the first item in queue
        let current = queue.shift();
        console.log(current)
        //check if current is a leaf, it has no children
        if (current.left === null && current.right === null) {
          depth++;
          return depth;
        }

        if (current.left !== null) {
          queue.push(current.left);
        }
        if (current.right !== null) {
          queue.push(current.right)
        }
        //get rid of node because we already checked
        numNodes--;
      }
      //increase the depth of the current tree once a 'level' has gone through 
      depth++

    }
    return depth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

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


  // // build small tree;
  // let smallLeft = new BinaryTreeNode(5);
  // let smallRight = new BinaryTreeNode(5);
  // let smallRoot = new BinaryTreeNode(6, smallLeft, smallRight);
  // let smallTree = new BinaryTree(smallRoot);

module.exports = { BinaryTree, BinaryTreeNode };
