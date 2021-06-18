/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    // create node for a new value
    const newNode = new Node(val);
    
    //check to see if linked list is empty
    if(!this.head){
      //set the first node in the linked list to be the head and tail. Increment count.
      this.head = newNode;
      this.tail = newNode;
      this.length +=1;
    } else {
      //set the tail's next value to be the new node 
      this.tail.next = newNode;
      //reset the tail to be the new node
      this.tail = newNode;
      //increment to count
      this.length +=1;
    }

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {

  }

  /** pop(): return & remove last item. */

  pop() {

  }

  /** shift(): return & remove first item. */

  shift() {

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
