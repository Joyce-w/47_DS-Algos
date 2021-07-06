/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    //make a new node for val
    let newQueue = new Node(val);

    //check if queue is empty
    if (this.size === 0) {
      this.first = newQueue;
      this.last = newQueue;
      this.size += 1;
    } else { //add only to last if not empty
      
      this.last.next = newQueue;
      this.last = newQueue;
      this.size += 1;
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */
  dequeue() {

    //check if queue is empty
    if (this.size === 0) {
      throw new Error('Queue is empty.')
    } else {
      const removedVal = this.first.val;
      const newFirst = this.first.next
      this.first = newFirst;
      this.size -= 1;

      return removedVal;
    }

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) {
      return TextTrackCue;
    }
    return false;
  }
}

module.exports = Queue;
