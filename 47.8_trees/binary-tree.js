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
    //initalize depth
    let depth = 0;
    //initalize queue
    let queue = [this.root];

    //loop while there is something in the queue
    while (queue.length) {
      //keep track of the current nodes in a level
      let numOfNodes = queue.length;

      //loop while there are nodes in the queue
      while (numOfNodes > 0) {
        console.log(numOfNodes)
        console.log(numOfNodes)
        //get the first in the queue
        let current = queue.shift();

        //check to see if the current is a leaf
        if (current.left === null && current.right === null) {
          depth++;
        }
        //check if there is a left branch
        if (current.left !== null) {
          queue.push(current.left)
        }
        //check if there is a right branch 
        if (current.right !== null) {
          queue.push(current.right)
        }

        console.log(queue)        
        numOfNodes--;
        
      }
    }
    return depth;
  }
  // maxDepth() {
  //   //initalize depth
  //   let depth = 0;
  //   //initalize queue
  //   let queue = [this.root];

  //   //loop while there is something in the queue
  //   while (queue.length) {
  //     //keep track of the current nodes in a level
  //     let numOfNodes = queue.length;

  //     //loop while there are nodes in the queue
  //     while (numOfNodes > 0) {
  //       console.log(numOfNodes)
  //       //get the first in the queue
  //       let current = queue.shift();

  //       //check to see if the current is a leaf
  //       if (current.left === null && current.right === null) {
  //         depth++;
  //       }
  //       //check if there is a left branch
  //       if (current.left !== null) {
  //         queue.push(current.left)
  //       }
  //       //check if there is a right branch 
  //       if (current.right !== null) {
  //         queue.push(current.right)
  //       }

  //       console.log(queue)        
  //       numOfNodes--;
        
  //     }
  //   }
  //   return depth;
  // }

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


  let node6 = new BinaryTreeNode(1);
  let node5 = new BinaryTreeNode(1);
  let node4 = new BinaryTreeNode(2);
  let node3 = new BinaryTreeNode(3, node4, node6);
  let node2 = new BinaryTreeNode(5, node3, node5);
  let node1 = new BinaryTreeNode(5);
  let root = new BinaryTreeNode(6, node1, node2);
  largeTree = new BinaryTree(root);

module.exports = { BinaryTree, BinaryTreeNode };
