class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(nodeVal) {
    //add node as root if no root
    if (!this.root) this.root = new Node(nodeVal);
    //if there is a root, make note of current
    else {
      let current = this.root;
      while (current) {
        //check if the val is greater than val, if so move left
        if (current.val > nodeVal) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = new Node(nodeVal)
            return this;
          }
        }
        //check if the val is less than val, if so move right
        if (current.val < nodeVal) {
          if (current.right) {
            current = current.right;
          } else {
            current.right = new Node(nodeVal)
            return this
          }
        }
      }
    }
  }
   
  

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(nodeVal) {
    //if there is no root, add one 
    if(!this.root) this.root = new Node(nodeVal);

    //traverse if there is a node pre order
    function traverse(node = this.root){
      
      //check to see if val is smaller than root
      if (node.val > nodeVal) {
        node.left ? traverse(node.left) : node.left = new Node(nodeVal);
      }
      if (node.val < nodeVal) {
          node.left ? traverse(node.right) : node.right = new Node(nodeVal);
      }  
  
    }
    traverse(this.root)
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
