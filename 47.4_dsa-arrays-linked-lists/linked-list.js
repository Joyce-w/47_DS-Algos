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
    //create a new node
    const newNode = new Node(val);
    //check to see if there is a head
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
      this.length +=1;
    } else{
    //make newNode's tail the head
      newNode.next = this.head;
    //redeclare the head as new Node    
      this.head = newNode;  
      this.length +=1;
    }

  }

  /** pop(): return & remove last item. */

  pop() {
    //checks to see if there is a head
    if(this.head){
      let front = this.head;
      let nextNode = front.next;

      //check if the next value is null (only one node in linked list)
      if(front.next === null){
        let val = front.val;
        front = null;
        this.length -=1;
        this.tail = null;
        this.head = null;
        return val;
      }
      else {
        //while the nextNode.next is not null, reassign the front to be the nextNode
        while(nextNode.next !== null){
          front = nextNode;
        }        
        //if nextNode.next value is null, save the value of nextNode
        let val = nextNode.val;
        //remove the node from front 
        front.next = null;
        //assign the front as the new tail
        this.tail = front;
        //adjust the linked list length;
        this.length -=1;
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

    if  (this.length === 0){
      return;
    }
    else if(this.length === 1){
      //reassign head to be the nextNode
      this.head = null;
      this.tail = null;
      this.length = 0;

      return shiftVal;
    } else {
      this.head = nextNode;
      this.length -=1;
      return shiftVal;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    //Make sure the linked list is that length
    if (this.length < idx){
      return;
    } else {
      let curr = this.head;
      if(idx === 0){
        return this.head.val;
      }
      for (let i = 0; i < idx; i++){
        curr = curr.next; 
          }
      return curr.val;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    //make a new node with val
    let newNode = new Node(val);
    
    if(idx === 0){
      let temp = this.head;
      this.head = newNode;
      newNode.next = this.head;
      this.head.next = temp;
      this.length +=1;

    } else {
      let currIdx = this.head;
      console.log(currIdx)
      for (let i = 0; i < idx-1; i++) {
        currIdx = currIdx.next;
      }
      let newNext = currIdx.next;
      currIdx.next = newNode;
      newNode.next = newNext;     
      this.length +=1;
    }


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
