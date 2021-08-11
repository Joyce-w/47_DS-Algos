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
    //initialize a count to keepe track of the nodes
    let count = 0;
    //keep track of nodes in a stack
    let stack = [this.root];
    //loop through the stack
    while (stack.length) {
      //keep track of the current node
      let current = stack.pop();
    //if the stack is empty return the count
      if (current === null) {
        return count;
      }
    //else check for any children and push to stack if so.
      else {
        if (current.children) {
          for (let child of current.children) {
            stack.push(child)
          }
        }
        //check if the current val is greater than lowerBound, add to count 
        if (current.val > lowerBound) {
          count += 1;
        }
      }  
    }
    console.log(count)
    return count;
  }

}

module.exports = { Tree, TreeNode };
