/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    //make new node with value
    const newNode = new Node(val);
    //check to see if stack is empty
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
      this.size += 1;
    } else {//link newNode to be first
      let newNext = this.first;
      this.first = newNode;
      this.first.next = newNext;
      //make last the new node
      this.size += 1;
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    //check if stack is empty
    if (this.size === 0) {
      throw new Error('Stack is empty.')
    } else {
      //return the last node that was pushed
      let temp = this.first;
      //reassign the next node to be the first
      this.first = this.first.next;
      this.size -= 1;
      return temp.val;
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    //checks for the value of the first node
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    //if this.size is 0, stack is empty 
    if (this.size === 0) {
      return true;
    }
    return false;
  }
}

module.exports = Stack;
