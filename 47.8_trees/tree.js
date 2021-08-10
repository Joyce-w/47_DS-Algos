/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. 
   * Uses DFS to 'sweep' from top to bottom of tree. Each time a ndoe is passed through, its value is summed up.
  */

  sumValues() {
    //initalize the sum 
    let sum = 0;
    //keep track of the stack
    const toVisitStack = [this.root]
    //while the stack has a length, keep looping
    while (toVisitStack.length) {
      //pop the most recently added node, and check for value and children
      //if no children will go to the next 'top' value in toVisitStack
      const current = toVisitStack.pop();
      //check if there is an empty stack
      if (!current) {
        return sum;
      }
      sum += current.val;
      //if current has children add them to stack
      if (current.children) {
        for (let child of current.children) {
          toVisitStack.push(child)
        }
      }
    }
    //return the sum once every node is visited
    return sum;
  }
    //start from the bottom and end at the root, checking if there is anything in the stack
    

    //goes through every node
    //every node we get its value
    //pops off when passed over
  

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

  }
}

// let htmlEl = new TreeNode('html',
//     [new TreeNode('head',
//             [new TreeNode('title')]),
//         new TreeNode('body',
//             [new TreeNode('ul',
//                 [new TreeNode('li'), new TreeNode('li2'), new TreeNode('li3')])])
//     ])


// let test = new Tree(htmlEl)


module.exports = { Tree, TreeNode };
