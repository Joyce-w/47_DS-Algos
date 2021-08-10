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
      //check if there is an empty stack, return sum if none
      if (current === null) {
        return sum;
      }
      else {
        //if current has children add them to stack
        if (current.children) {
          for (let child of current.children) {
            toVisitStack.push(child)
          }
        }        
      }
      sum += current.val;
    }
    //return the sum once every node is visited
    return sum;
  }


  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    //initialize a count
    let count = 0;
    let toCountStack = [this.root]
    while (toCountStack.length) {
      //pop value off stack
      let current = toCountStack.pop();
      // if the stack is null than return the count
      if (current === null) {
        return count;
      }
      else {
        if (current.children) {
          //add children to stack if any
          for (let child of current.children) {
            toCountStack.push(child)
          }
        }
          //check for evenness at every current node
          if (current.val % 2 === 0) {
            count += 1;
          }        
      }
    }
    return count;
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



//   let nSmall = new TreeNode(1);
//   let nSmall2 = new TreeNode(2);
//   nSmall.children.push(nSmall2);
// let smallTree = new Tree(nSmall);
  
  

module.exports = { Tree, TreeNode };
