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
    if (!this.head) {
      //set the first node in the linked list to be the head and tail. Increment count.
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      //set the tail's next value to be the new node 
      this.tail.next = newNode;
      //reset the tail to be the new node
      this.tail = newNode;
      //increment to count
      this.length += 1;
    }

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    //create a new node
    const newNode = new Node(val);
    //check to see if there is a head
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      //make newNode's tail the head
      newNode.next = this.head;
      //redeclare the head as new Node    
      this.head = newNode;
      this.length += 1;
    }

  }

  /** pop(): return & remove last item. */

  pop() {
    //checks to see if there is a head
    if (this.head) {
      let front = this.head;
      let nextNode = front.next;

      //check if the next value is null (only one node in linked list)
      if (front.next === null) {
        let val = front.val;
        front = null;
        this.length -= 1;
        this.tail = null;
        this.head = null;
        return val;
      }
      else {
        //while the nextNode.next is not null, reassign the front to be the nextNode
        while (nextNode.next !== null) {
          front = nextNode;
        }
        //if nextNode.next value is null, save the value of nextNode
        let val = nextNode.val;
        //remove the node from front 
        front.next = null;
        //assign the front as the new tail
        this.tail = front;
        //adjust the linked list length;
        this.length -= 1;
        return val;
      }
    }
    
  }

  /** shift(): return & remove first item. */

  shift() {
    //reassign the head to be the next node
    let currHead = this.head
    let nextNode = currHead.next;

    let shiftVal = this.head.val;

    if (this.length === 0) {
      return;
    }
    else if (this.length === 1) {
      //reassign head to be the nextNode
      this.head = null;
      this.tail = null;
      this.length = 0;

      return shiftVal;
    } else {
      this.head = nextNode;
      this.length -= 1;
      return shiftVal;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    //Make sure the linked list is that length
    if (this.length < idx) {
      return;
    } else {
      let curr = this.head;
      if (idx === 0) {
        return this.head.val;
      }
      for (let i = 0; i < idx; i++) {
        curr = curr.next;
      }
      return curr.val;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    //make a new node with val
    let newNode = new Node(val);
    
    if (idx === 0) {
      let temp = this.head;
      this.head = newNode;
      newNode.next = this.head;
      this.head.next = temp;
      this.length += 1;

    } else {
      let currIdx = this.head;
      for (let i = 0; i < idx - 1; i++) {
        currIdx = currIdx.next;
      }
      let newNext = currIdx.next;
      currIdx.next = newNode;
      newNode.next = newNext;
      this.length += 1;
    }


  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    //create new node
    let newNode = new Node(val);

    //keep track of curr node
    let currNode = this.head;

    //if linkedlist is empty, insert
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    }
    //if the idx is at the end of the array. loop to last node
    else if (this.length + 1 === idx) {
      while (currNode.next !== null) {
        currNode = currNode.next;
      }
      currNode.next = newNode;
      this.tail = newNode;
      
    }
      //for index between linked list, loop until just before idx
    else {
      for (let i = 0; i < idx- 1; i++){
        currNode = currNode.next;
      }
      //if there is a next value.
      if (currNode.next) {
        //save the next value and assign it to the newNode.next. 
        let newNext = currNode.next;
        //assign the newNode to be the currNode.next value; 
        currNode.next = newNode;
        newNode.next = newNext;
        this.length += 1;
      } else {
        currNode.next = newNode;
        this.tail = newNode;
        this.length += 1;
      }
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    //if there is only one val, set head/tail to null;
    if (this.length === 1) {
      let returnVal = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return returnVal;
    }
    //more than one node, loop until before idx
    else {
      let currNode = this.head;
      for (let i = 0; i < idx; i++) {
        currNode = currNode.next;
      }
      //save the next node of the idx that will be deleted;
      let newNext = currNode.next.next;
      //save the val of the node that wil be deleted
      let returnVal = currNode.next.val;
      //set the node before target node to have newNext that skips over the deleted node.
      currNode.next = newNext;
      this.length -= 1;
      return returnVal;
    }

  }

  /** average(): return an average of all values in the list */

  average() {
    //check to see if linked list is empty
    if (this.head) {
      let sum = this.head.val;
      let currNode = this.head;
      //loop entire linked list and add the val of each node to the sum
      for (let i = 0; i < (this.length - 1); i++) {
        currNode = currNode.next;
        let val = currNode.val;
        sum = sum + val;
      }
      return sum / this.length;
    }
    //return 0 for empty linked list
    else {
      return 0;
    }
  }


}
module.exports = LinkedList;
