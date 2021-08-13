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
      //while there is a root, loop
      while (current) {
        //check if the val is greater than val, if so move left
        if (current.val > nodeVal) {
          if (current.left) { /*if there is a left check go to the next left */
            current = current.left;
          } else { /*if no left, insert the node to the left of the current node*/
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
    let current = this.root;
    if (!current) return undefined;
    if (current.val === val) return current;
    while (current) {
      //check if new current is val
      if (current.val === val) return current;
      //check if current is more than val, go left;
      if (current.val > val) {
        current = current.left;
      } else { /*if current.val is less than val*/
        current = current.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

    function findVal(currentNode) {
      //return undefined if no root
      if (!currentNode) return undefined;
      
      //return if the current root is the same as the val
      if (currentNode.val === val) return currentNode;
      //check if current val is larger than val
      if (currentNode.val > val) {

        return findVal(currentNode.left)
      }
      //check if current val is smaller than val
      if (currentNode.val < val) {

        return findVal(currentNode.right)
      } 
    }
    
    return findVal(this.root)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

    //keep track of visited arrays
    let nodeArray = [];
    //loop while there is a stack
    function preOrderTraverse(node) {
      console.log(node, nodeArray)
      //add current 
      nodeArray.push(node.val);
      //if there is a left traverse left
      node.left && preOrderTraverse(node.left)
      //if there is a right, traverse right
      node.right && preOrderTraverse(node.right)
    }
    
    preOrderTraverse(this.root)
    return nodeArray
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let nodeArray = [];
      function inOrderTraverse(node) {
        //traverse left if left
        node.left && inOrderTraverse(node.left)
        //push to array when no more lefts
        nodeArray.push(node.val)
        //traverse right if right
        node.right && inOrderTraverse(node.right)
    }
    
    inOrderTraverse(this.root);
    return nodeArray;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let nodeArray = [];

    function postOrderTraverse(node) {
      //if there is a left, traverse left
      node.left && postOrderTraverse(node.left)
      //if there is a right, traverse right
      node.right && postOrderTraverse(node.right)
      //add node val to array if no left/right
      nodeArray.push(node.val)
    }
    postOrderTraverse(this.root)
    return nodeArray;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let nodeArray = [];
    //create a queue
    let queue = [this.root];

    //keep track of nodes
    let numNodes = queue    
    while (queue.length) {
      
      const current = queue.shift();
      if (current.val === val) {
        return current
      }
    }

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
